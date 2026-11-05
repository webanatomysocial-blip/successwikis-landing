<?php
/**
 * SuccessWikis contact mailer — PHPMailer + Hostinger SMTP
 *
 * Setup:
 *   1. Run `composer install` inside this folder.
 *   2. Fill in the SMTP credentials below (or use a .env file).
 *   3. Upload this whole folder (mailer/) to your Hostinger public_html.
 *   4. Set NEXT_PUBLIC_MAILER_URL=https://yourdomain.com/mailer/mailer.php
 *      in your Next.js .env.local (and in Hostinger's env panel for prod).
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

// ── Hostinger SMTP credentials ────────────────────────────────────────────────
define('SMTP_HOST',     'smtp.hostinger.com');
define('SMTP_PORT',     465);               // 465 = SSL  |  587 = TLS (change SMTP_SECURE too)
define('SMTP_SECURE',   PHPMailer::ENCRYPTION_SMTPS); // SMTPS for 465, STARTTLS for 587
define('SMTP_USER',     'hello@successwikis.com');    // your Hostinger email address
define('SMTP_PASS',     'YOUR_EMAIL_PASSWORD');       // your Hostinger email password

define('TO_EMAIL',      'hello@successwikis.com');
define('TO_NAME',       'SuccessWikis');
define('FROM_EMAIL',    'hello@successwikis.com');    // must match SMTP_USER on Hostinger
define('FROM_NAME',     'SuccessWikis Website');
define('SUBJECT',       'New Enquiry — SuccessWikis');
// ─────────────────────────────────────────────────────────────────────────────

// Allowed origins
$allowed_origins = [
    'https://successwikis.com',
    'https://www.successwikis.com',
    'http://localhost:3000',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Parse JSON body
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true) ?: [];

function clean(string $v): string {
    return htmlspecialchars(strip_tags(trim($v)), ENT_QUOTES, 'UTF-8');
}

$name  = clean($data['name']  ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = clean($data['phone'] ?? '');
$topic = clean($data['topic'] ?? '');

if (!$name || !$email || !$phone) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

// Send via PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port       = SMTP_PORT;

    $mail->setFrom(FROM_EMAIL, FROM_NAME);
    $mail->addAddress(TO_EMAIL, TO_NAME);
    $mail->addReplyTo($email, $name);

    $mail->Subject = SUBJECT;
    $mail->isHTML(true);
    $mail->Body = "
        <h2 style='font-family:sans-serif;margin:0 0 24px'>New Enquiry</h2>
        <table style='font-family:sans-serif;font-size:15px;border-collapse:collapse'>
            <tr><td style='padding:6px 20px 6px 0;color:#888'>Name</td>  <td><strong>{$name}</strong></td></tr>
            <tr><td style='padding:6px 20px 6px 0;color:#888'>Email</td> <td><a href='mailto:{$email}'>{$email}</a></td></tr>
            <tr><td style='padding:6px 20px 6px 0;color:#888'>Phone</td> <td>{$phone}</td></tr>
            <tr><td style='padding:6px 20px 6px 0;color:#888'>Topic</td> <td>{$topic}</td></tr>
        </table>
    ";
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nTopic: {$topic}";

    $mail->send();
    echo json_encode(['ok' => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $mail->ErrorInfo]);
}
