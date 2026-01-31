import Navbar from "../components/Navbar";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="block container">
        <h2 className="gallery__header">Gallery</h2>

        <section className="gallery--categories">
          <Link href="/events" className="category-card">
            <img
              src="/images/promPhotoshoot_5-21-25-283.jpg"
              alt="Events photography"
            />
            <h2>Events</h2>
          </Link>

          <Link href="/nature" className="category-card">
            <img
              src="/images/walmartPrinting (2 of 4).jpg"
              alt="Nature photography"
            />
            <h2>Nature</h2>
          </Link>

          <Link href="/cars" className="category-card">
            <img src="/images/ferrari.jpg" alt="Car photography" />
            <h2>Cars</h2>
          </Link>

          <Link href="/sports" className="category-card">
            <img
              src="/images/boysbbalseniornight25 (117 of 38)-2.jpg"
              alt="Sports photography"
            />
            <h2>Sports</h2>
          </Link>
        </section>
      </main>

      {/* Footer */}
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
    </>
  );
}
