const faq = [
  "What Is Successwikis Live?",
  "Who Can Attend The Event?",
  "What Can I Expect From The Event?",
  "How Can I Register For The Event?",
  "Will I Get An Opportunity To Network With Founders And Industry Leaders?",
];

const ChevronDown = () => (
  <svg
    className="faq-chevron"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq-head">
        <span className="eyebrow">FAQ&apos;s</span>
        <h2 data-reveal>GOT QUESTIONS?</h2>
        <p>We&apos;ve got all the answers ready for you</p>
      </div>
      <div className="faq-list">
        {faq.map((q, i) => (
          <details key={q} data-reveal>
            <summary>
              {q}
              <ChevronDown />
            </summary>
            <p>
              {i === 0
                ? "SuccessWikis Live is an intimate one-day experience built around honest founder stories, practical lessons and meaningful real-world connections."
                : "Our team will confirm the full details with your pass enquiry."}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
