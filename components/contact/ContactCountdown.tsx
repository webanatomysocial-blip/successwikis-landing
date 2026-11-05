import Countdown from "@/components/Countdown";

export default function ContactCountdown() {
  return (
    <section className="contact-countdown">
      <div className="contact-countdown-copy">
        <span className="eyebrow">Doors open in</span>
        <h2 data-reveal>
          Early-bird pricing ends 1 November. After that, passes go up by{" "}
          <em>30%.</em>
        </h2>
        <a className="cta light" href="#contact-form">
          Save Your Spot <i>↗</i>
        </a>
      </div>
      <Countdown large deadline />
    </section>
  );
}
