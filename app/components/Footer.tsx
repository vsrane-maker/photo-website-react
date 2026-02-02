import Link from "next/link";

export default function Footer() {
  return (
    <footer className="block--dark footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-title">VJ&apos;s Visuals</p>
          <p className="footer-tagline">Nature, Portraits, Sports and More</p>
        </div>

        <p className="footer-genres">Sports • Events • Nature • Cars</p>

        <nav className="footer-nav" aria-label="Footer">
          <Link href="/gallery">Gallery</Link>
          <span className="dot" aria-hidden="true">
            •
          </span>
          <Link href="/about">About</Link>
          <span className="dot" aria-hidden="true">
            •
          </span>
          <Link href="#">Contact</Link>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/vjsvisuals/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram •
          </a>

          <a
            href="https://www.linkedin.com/in/viraaj-sushil-rane-b65251265/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="footer-copy">© 2026 Viraaj Rane. All rights reserved.</p>
    </footer>
  );
}
