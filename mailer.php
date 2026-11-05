<?php
/**
 * SuccessWikis contact form mailer.
 * Upload this file to any PHP host (e.g. cPanel shared hosting).
 * Set the constants below, then set NEXT_PUBLIC_MAILER_URL in your
 * Next.js .env.local to this file's public URL.
 *
 * Requirements: PHP 7.4+, php-mbstring, an SMTP account.
 * No Composer needed — uses PHP's built-in mail() with SMTP relay,
 * or swap the send_mail() body for PHPMailer if you need TLS.
 */

// ── Configuration ────────────────────────────────────────────────────────────
define('TO_EMAIL',    'hello@successwikis.com');
define('TO_NAME',     'SuccessWikis');
define('FROM_EMAIL',  'noreply@successwikis.com'); // must be on your hosting domain
define('FROM_NAME',   'SuccessWikis Website');
define('SUBJECT',     'New Enquiry — SuccessWikis');

// Allowed origins (your production domain + localhost for dev)
$allowed_origins = [
    'https://successwikis.com',
    'https://www.successwikis.com',
    'http://localhost:3000',
];
// ─────────────────────────────────────────────────────────────────────────────

// CORS
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

// Parse body (JSON or form-encoded)
$body = file_get_contents('php://input');
$data = json_decode($body, true);
if (!$data) {
    parse_str($body, $data);
}
if (!$data) {
    $data = $_POST;
}

// Sanitise
function clean(string $v): string {
    return htmlspecialchars(strip_tags(trim($v)), ENT_QUOTES, 'UTF-8');
}

$name  = clean($data['name']  ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = clean($data['phone'] ?? '');
$topic = clean($data['topic'] ?? '');

// Validate
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

// Build email
$message = "New enquiry from the SuccessWikis website.\n\n"
    . "Name:   {$name}\n"
    . "Email:  {$email}\n"
    . "Phone:  {$phone}\n"
    . "Topic:  {$topic}\n\n"
    . "---\n"
    . "Sent: " . date('Y-m-d H:i:s T');

$headers  = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . PHP_VERSION;

$sent = mail(TO_EMAIL, SUBJECT, $message, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail delivery failed']);
}
