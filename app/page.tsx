import Image from "next/image";
import Countdown from "@/components/Countdown";
import Animations from "@/components/Animations";
import FloatingNav from "@/components/common/FloatingNav";
import EventFooter from "@/components/common/EventFooter";
const A = "/images/";
const feature = [
  {
    n: "01",
    t: "Learn",
    d: "Get practical insights from industry experts and fellow founders.",
  },
  {
    n: "02",
    t: "Network",
    d: "Build meaningful connections with like-minded people.",
  },
  {
    n: "03",
    t: "Grow",
    d: "Discover new opportunities and fresh perspectives.",
  },
];
const audience = [
  { t: "Founders", d: "Get inspired, find mentors, and scale faster." },
  {
    t: "Business Owners",
    d: "Learn strategies, solve real challenges and expand your network.",
  },
  { t: "Startup Teams", d: "Collaborate, innovate, and build what's next." },
  {
    t: "Audience",
    d: "Fresh perspectives, meaningful connections, growth and opportunities.",
  },
];
const gains = [
  {
    t: "Networking Skills",
    d: "Real-time peer interactions and partnership building.",
  },
  {
    t: "Leadership Insights",
    d: "Actionable frameworks from industry builders and founders.",
  },
  {
    t: "Leadership Roles",
    d: "Pathways to community leadership and collaborative projects.",
  },
  {
    t: "Partners",
    d: "Brand visibility among digital native creators, direct community engagement, and ecosystem growth.",
  },
];
function Glyph({ kind }: { kind: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (kind === "Learn")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path {...common} d="M7 10h18M7 16h18M7 22h18M12 7V4m-3 3h6" />
      </svg>
    );
  if (
    kind === "Network" ||
    kind === "Networking Skills" ||
    kind === "Startup Teams"
  )
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle {...common} cx="16" cy="8" r="3" />
        <circle {...common} cx="7" cy="23" r="3" />
        <circle {...common} cx="25" cy="23" r="3" />
        <path {...common} d="M16 11v6M7 20v-3h18v3" />
      </svg>
    );
  if (kind === "Grow")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path {...common} d="M8 24 15 17l4 4 7-10M20 11h6v6" />
      </svg>
    );
  if (kind === "Founders")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          {...common}
          d="M18 5c4 1 7 4 8 8l-8 8-7-7 7-9Zm-7 9-5 2-2 5 7-1m7 1-1 7-5-4m-4 0-3 3"
        />
      </svg>
    );
  if (kind === "Business Owners")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          {...common}
          d="M5 13h22l-2-7H7l-2 7Zm2 0v13h18V13M11 26v-7h10v7M5 13c1 4 5 4 6 0 1 4 5 4 6 0 1 4 5 4 6 0"
        />
      </svg>
    );
  if (kind === "Audience")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle {...common} cx="11" cy="10" r="4" />
        <circle {...common} cx="22" cy="10" r="4" />
        <path
          {...common}
          d="M4 25c0-5 3-8 7-8s7 3 7 8m0-7c1-1 2-1 4-1 4 0 7 3 7 8"
        />
      </svg>
    );
  if (kind === "Leadership Insights")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          {...common}
          d="M10 19c-2-2-3-4-3-7a9 9 0 0 1 18 0c0 3-1 5-3 7-2 2-2 3-2 4h-8c0-1 0-2-2-4ZM12 27h8"
        />
      </svg>
    );
  if (kind === "Leadership Roles")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path {...common} d="M8 28V5m0 2c6-4 10 4 16 0v12c-6 4-10-4-16 0" />
      </svg>
    );
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        {...common}
        d="m5 17 6 6 4-4m12-2-6 6-4-4M10 12l4-4c2-2 5-2 7 0l2 2M22 12l-4-4c-2-2-5-2-7 0l-2 2"
      />
    </svg>
  );
}
export default function Home() {
  return (
    <>
      <Animations />
      <FloatingNav />
      <main>
        <section className="hero">
          <Image
            className="hero-bg"
            src={`${A}hero.jpg`}
            alt="SuccessWikis community in conversation"
            fill
            priority
            sizes="100vw"
          />
          <div className="shade" />
          <div className="hero-content">
            <div className="hero-kicker">
              <span>JUBILEE HILLS, HYD</span>
              <span>14TH NOVEMBER</span>
            </div>
            <h1 className="hero-title">The Story Behind the Story</h1>
            <a className="cta light" href="#tickets">
              Save Your Spot <i>↗</i>
            </a>
          </div>
          <div className="hero-count">
            <p>Doors open in :</p>
            <Countdown />
          </div>
        </section>
        <section className="manifesto-wrap">
          <h2
            className="manifesto"
            aria-label="Real journeys. Honest conversations. Practical lessons for people building meaningful real-world connections. Authentic insights."
          >
            {"REAL JOURNEYS. HONEST CONVERSATIONS. PRACTICAL LESSONS FOR PEOPLE BUILDING MEANINGFUL REAL-WORLD CONNECTIONS. AUTHENTIC INSIGHTS."
              .split(" ")
              .map((w, i) => (
                <span key={i}>{w} </span>
              ))}
          </h2>
          <a className="cta outline" href="#tickets">
            Save Your Spot <i>↗</i>
          </a>
        </section>
        <section className="about">
          <div className="eyebrow">ABOUT THE CIRCLE</div>
          <div className="about-grid">
            <h2 data-reveal>
              1 DAY <em>immersion into deep-talk</em>
            </h2>
            <div className="about-copy" data-reveal>
              <p>
                A SuccessWikis live experience where founders, creators, and
                leaders share the real decisions, failures, doubts, and turning
                points behind their success.
              </p>
              <small>
                Honest conversations with people who built, failed, restarted,
                and grew.
              </small>
            </div>
          </div>
          <div className="photo-frame" data-reveal>
            <Image
              data-parallax
              src={`${A}about.jpg`}
              alt="A SuccessWikis circle discussion"
              fill
              sizes="100vw"
            />
          </div>
        </section>
        <section id="highlight" className="features">
          <div className="section-head">
            <div>
              <span className="eyebrow">HIGHLIGHTS</span>
              <h2 data-reveal>What You Get</h2>
            </div>
            <Image src={`${A}mark-white.png`} alt="" width={90} height={60} />
          </div>
          <div className="feature-grid">
            <article className="feature-cover">
              <Image
                src={`${A}group.jpg`}
                alt="SuccessWikis community"
                fill
                sizes="25vw"
              />
              <h3>WHAT YOU GET</h3>
            </article>
            {feature.map((x) => (
              <article key={x.t} data-reveal>
                <span className="feature-glyph">
                  <Glyph kind={x.t} />
                </span>
                <span className="feature-number">{x.n}</span>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
                <b>↗</b>
              </article>
            ))}
          </div>
        </section>
        <section className="group">
          <div className="eyebrow">tHE GROUP</div>
          <div className="group-title">
            <h2 data-reveal>
              WHO
              <span className="mobile-title-break">
                <br />
              </span>{" "}
              SHOULD JOIN
            </h2>
            <p data-reveal>Clarifying who belongs at this summit</p>
          </div>
          <div className="portrait">
            <Image
              data-parallax
              src={`${A}community.jpg`}
              alt="SuccessWikis community in discussion"
              fill
              sizes="100vw"
            />
          </div>
          <div className="audience-grid">
            {audience.map((x) => (
              <article key={x.t} data-reveal>
                <span className="audience-icon">
                  <Glyph kind={x.t} />
                </span>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="privileges">
          <span className="eyebrow">TICKET PRIVILEGES</span>
          <div className="priv-title">
            <h2 data-reveal>What You'll Gain</h2>
            <p data-reveal>
              Every pass is a blueprint for access. We handle the friction of
              the city so you can focus on the future.
            </p>
          </div>
          <div className="gain-grid">
            {gains.map((x) => (
              <article key={x.t} data-reveal>
                <div className="gain-num">
                  <Glyph kind={x.t} />
                </div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="tickets" className="early">
          <div className="early-copy">
            <span className="eyebrow">Doors open in</span>
            <h2 data-reveal>
              Early-bird pricing ends 10 November. After that, passes go up by{" "}
              <em>30%.</em>
            </h2>
            <a
              className="cta light"
              href="mailto:hello@successwikis.com?subject=SuccessWikis%20Event%20Ticket"
            >
              Save Your Spot <i>↗</i>
            </a>
          </div>
          <Countdown large deadline />
        </section>
      </main>
      <EventFooter />
    </>
  );
}
