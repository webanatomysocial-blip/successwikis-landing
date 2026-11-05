import Image from "next/image";

export default function FloatingNav() {
  return (
    <nav className="floating-nav site-nav" aria-label="Primary navigation">
      <a href="/#highlight">Features</a>
      <a className="nav-logo" href="/" aria-label="SuccessWikis home">
        <Image src="/images/logo.png" alt="" width={100} height={34} />
      </a>
      <a href="/contact">Get Tickets</a>
    </nav>
  );
}
