import Navbar from "../components/Navbar";
import Link from "next/link";

export default function carPage() {
  return (
    <>
      <Navbar />

      {/* Monterey */}
      <h3 style={{ textAlign: "center" }}>Monterey Car Week 2026</h3>

      <section className="masonry--gallery">
        <img src="/images/exports/monterey-1.jpg" alt="" />
        <img src="/images/exports/monterey-3.jpg" alt="" />
        <img src="/images/exports/monterey-4.jpg" alt="" />
        <img src="/images/exports/monterey-5.jpg" alt="" />
        <img src="/images/exports/monterey-6.jpg" alt="" />
        <img src="/images/exports/monterey-8.jpg" alt="" />
        <img src="/images/exports/monterey-9.jpg" alt="" />
        <img src="/images/exports/monterey-10.jpg" alt="" />
        <img src="/images/exports/monterey-11.jpg" alt="" />
        <img src="/images/exports/monterey-12.jpg" alt="" />
        <img src="/images/exports/monterey-13.jpg" alt="" />
        <img src="/images/exports/monterey-14.jpg" alt="" />
      </section>

      {/* Film */}
      <h3 style={{ textAlign: "center" }}>Shot on Film</h3>

      <section className="masonry--gallery">
        <img src="/images/ferrari.jpg" alt="" />
        <img src="/images/ferrari_2.jpg" alt="" />
        <img src="/images/ferrari_3.jpg" alt="" />
        <img src="/images/ferrari_4.jpg" alt="" />
        <img src="/images/ferrari_5.jpg" alt="" />
        <img src="/images/ferrari_6.jpg" alt="" />
      </section>

      {/* NY Auto Show */}
      <h3 style={{ textAlign: "center" }}>
        New York International Auto Show 2025
      </h3>

      <section className="masonry--gallery">
        <img src="/images/NYC1.jpg" alt="" />
        <img src="/images/NYC2.jpg" alt="" />
        <img src="/images/NYC3.jpg" alt="" />
        <img src="/images/NYC4.jpg" alt="" />
        <img src="/images/NYC5.jpg" alt="" />
        <img src="/images/NYC6.jpg" alt="" />
        <img src="/images/NYC7.jpg" alt="" />
        <img src="/images/NYC8.jpg" alt="" />
        <img src="/images/NYC9.jpg" alt="" />
        <img src="/images/NYC10.jpg" alt="" />
        <img src="/images/NYC11.jpg" alt="" />
        <img src="/images/NYC12.jpg" alt="" />
        <img src="/images/NYC13.jpg" alt="" />
      </section>

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
