import ContactForm from "./ContactForm";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="step step-top" />
      <div className="step step-bottom" />

      <div className="contact-intro">
        <span className="eyebrow">Contact us</span>
        <h1 data-reveal>
          DON&apos;T MISS THE
          <br />
          NEXT CHAPTER.
          <br />
          RESERVE YOUR SPOT.
        </h1>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Neon event ticket"
        >
          <source src="/images/contact/ticket.webm" type="video/webm" />
        </video>
        <p className="contact-meta">
          Date : <span>Venue :</span>
        </p>
        <small>
          <i />
          Typical response: 1–2 business days.
        </small>
      </div>

      <ContactForm />
    </section>
  );
}
