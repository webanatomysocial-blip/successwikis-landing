import Image from "next/image";

export default function EventFooter({
  showImage = true,
}: {
  showImage?: boolean;
}) {
  return (
    <footer className={`event-footer${showImage ? "" : " footer-plain"}`}>
      {showImage && (
        <div className="footer-image">
          <Image
            src="/images/charminar.png"
            alt="Illustration of Hyderabad's Charminar"
            fill
            sizes="100vw"
          />
        </div>
      )}
      <div className="footer-content">
        <div>
          <h2 data-reveal>JOIN THE EVENT THAT&apos;LL SHAPE YOUR FUTURE</h2>
          <div className="event-date">
            <div>
              <b>14th November, 2026</b>
              <span>9:00 AM</span>
            </div>
            <div className="calendar">
              <b>NOV</b>
              <strong>14</strong>
              <span>SAT</span>
            </div>
          </div>
        </div>
        <a className="cta light" href="/contact">
          Save Your Spot <i>↗</i>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© Successwikis 2026. All rights reserved.</span>
        <span>Created by Sandeep M</span>
      </div>
    </footer>
  );
}
