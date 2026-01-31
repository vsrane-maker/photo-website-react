import Navbar from "../components/Navbar";
import Link from "next/link";

export default function eventsPage() {
  return (
    <>
      <Navbar />
      <h3 style={{ textAlign: "center" }}>Prom Photoshoots</h3>

      <section className="masonry--gallery">
        <img src="/images/events/promshoot1.jpg" alt="" />
        <img src="/images/events/promshoot2.jpg" alt="" />
        <img src="/images/events/promshoot3.jpg" alt="" />
        <img src="/images/events/promshoot4.jpg" alt="" />
        <img src="/images/events/promshoot5.jpg" alt="" />
        <img src="/images/events/promshoot6.jpg" alt="" />
        <img src="/images/events/promshoot7.jpg" alt="" />
        <img src="/images/events/promshoot8.jpg" alt="" />
        <img src="/images/events/promshoot9.jpg" alt="" />
        <img src="/images/events/promshoot10.jpg" alt="" />
        <img src="/images/events/promshoot11.jpg" alt="" />
      </section>

      <section className="masonry--gallery">
        <img src="/images/events/promshoot20.jpg" alt="" />
        <img src="/images/events/promshoot21.jpg" alt="" />
        <img src="/images/events/promshoot22.jpg" alt="" />
        <img src="/images/events/promshoot23.jpg" alt="" />
        <img src="/images/events/promshoot24.jpg" alt="" />
        <img src="/images/events/promshoot25.jpg" alt="" />
        <img src="/images/events/promshoot26.jpg" alt="" />
        <img src="/images/events/promshoot27.jpg" alt="" />
        <img src="/images/events/promshoot28.jpg" alt="" />
        <img src="/images/events/promshoot29.jpg" alt="" />
        <img src="/images/events/promshoot30.jpg" alt="" />
      </section>

      {/* Graduation */}
      <h3 style={{ textAlign: "center" }}>Graduation Photoshoots</h3>

      <section className="masonry--gallery">
        <section>
          <img src="/images/events/anjali_grad-1.jpg" alt="" />
          <img src="/images/events/anjali_grad2.jpg" alt="" />
          <img src="/images/events/anjali_grad3.jpg" alt="" />
          <img src="/images/events/anjali_grad4.jpg" alt="" />
          <img src="/images/events/anjali_grad5.jpg" alt="" />
          <img src="/images/events/anjali_grad6.jpg" alt="" />
          <img src="/images/events/anjali_grad7.jpg" alt="" />
        </section>
      </section>

      <section className="masonry--gallery">
        <img src="/images/events/gradshoot1.jpg" alt="" />
        <img src="/images/events/gradshoot2.jpg" alt="" />
        <img src="/images/events/gradshoot3.jpg" alt="" />
        <img src="/images/events/gradshoot4.jpg" alt="" />
        <img src="/images/events/gradshoot5.jpg" alt="" />
        <img src="/images/events/gradshoot6.jpg" alt="" />
        <img src="/images/events/gradshoot7.jpg" alt="" />
        <img src="/images/events/gradshoot8.jpg" alt="" />
        <img src="/images/events/gradshoot9.jpg" alt="" />
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
