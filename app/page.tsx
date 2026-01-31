"use client";

import Link from "next/link";
import Script from "next/script";
import Navbar from "./components/Navbar.jsx";

import "./globals.css";
import "../public/css/normalize.css";
import "../public/css/styles.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      {/* Your navbar */}
      <Navbar />

      <main style={{ padding: "2rem" }}></main>

      {/* Hero */}
      <section className="block hero">
        <div className="grid grid--1x2">
          <header className="block__header hero__content">
            <h1 className="block__heading">VJ&apos;s Visuals</h1>
            <p className="hero__tagline">Nature, Portraits, Sports and More</p>
            <Link href="/gallery" className="btn btn--accent btn--stretched">
              View Gallery
            </Link>
          </header>

          <picture>
            <source
              type="image/jpg"
              srcSet="/images/resized/mounttamalpais-23_resized.jpg 2x, /images/resized/mounttamalpais_resized_small.jpg 1x"
            />
            <img
              className="hero__image"
              src="/images/mounttamalpais-23.jpg"
              alt=""
            />
          </picture>
        </div>
      </section>
      {/* Header block */}
      <header
        style={{ marginTop: "15rem", marginBottom: "20rem" }}
        data-aos="fade-up"
        className="block__header"
      >
        <h2>Capture Your Moments</h2>
        <p>So you can relive the moments that matter most.</p>
      </header>
      {/* About feature */}
      <article className="grid grid--1x2-1 feature">
        <div data-aos="fade-left">
          <h3 style={{ paddingLeft: "2rem" }} className="feature__heading">
            About Me
          </h3>

          <p className="aboutMe__description">
            My name is Viraaj Rane. I&apos;m currently a first year student at
            UC San Diego pursuing a Bachelor&apos;s degree in Computer Science.
            Photography has been a passion of mine for several years, and I
            specialize in wildlife photography as well as portrait photography.
            I love capturing the beauty of nature and the essence of people
            through my lens. However, I love to explore different genres such as
            sports and automotive photography.
          </p>

          <Link
            style={{ paddingLeft: "2rem" }}
            href="/about"
            className="link-arrow"
          >
            Learn More
          </Link>
        </div>

        <picture data-aos="fade-left">
          <source
            type="image/jpg"
            srcSet="/images/resized/ViraajRane_pfp.jpg 1x, /images/resized/ViraajRane_pfp_2x.jpg 2x"
          />
          <img
            className="feature__image"
            src="/images/resized/ViraajRane_pfp_resized.jpg"
            alt=""
          />
        </picture>
      </article>
      {/* Booking header */}
      <header className="block__header" data-aos="fade-up">
        <h2>Book a session for your next photoshoot, party, or event!</h2>
      </header>
      {/* Plans */}
      <section className="block container block-plans">
        <div className="grid grid--1x3">
          {/* Plan 1 */}
          <div className="plan" data-aos="fade-right" data-aos-delay="100">
            <div className="card card--secondary">
              <header className="card__header">
                <h3 className="plan__name">Solo/Duo Session</h3>
                <span className="plan__price">$75</span>
                <span className="plan__billing-cycle">/hour</span>
                <span className="badge badge--secondary badge--small">
                  10% off
                </span>
                <span className="plan__description">Groups of 1-2</span>
              </header>

              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">50+ Edited Images</li>
                  <li className="list__item">Advanced Retouching</li>
                  <li className="list__item">7-14 Day Turnaround</li>
                  <li className="list__item">Includes Solos (Limited)</li>
                </ul>

                <Link
                  href="/bookings"
                  className="btn btn--outline btn--block btn--primary"
                >
                  Request this Session
                </Link>
              </div>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="plan" data-aos="fade-up" data-aos-delay="100">
            <div className="card card--primary">
              <header className="card__header">
                <h3 className="plan__name">Group Session</h3>
                <span className="plan__price">$120</span>
                <span className="plan__billing-cycle">/hour</span>
                <span className="badge badge--secondary badge--small">
                  10% off
                </span>
                <span className="plan__description">Groups of 4+</span>
              </header>

              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">100+ Edited Images</li>
                  <li className="list__item">Advanced Retouching</li>
                  <li className="list__item">7-14 Day Turnaround</li>
                  <li className="list__item">Includes Solos (Limited)</li>
                </ul>

                <Link
                  href="/bookings"
                  className="btn btn--outline btn--block btn--primary"
                >
                  Request this Session
                </Link>
              </div>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="plan" data-aos="fade-left" data-aos-delay="100">
            <div className="card card--primary">
              <header className="card__header">
                <h3 className="plan__name">Events /</h3>
                <span className="plan__price">$200</span>
                <span className="plan__billing-cycle">/hour</span>
                <span className="badge badge--secondary badge--small">
                  10% off
                </span>
                <span className="plan__description">Groups of 8+</span>
              </header>

              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">200+ Edited Images</li>
                  <li className="list__item">Advanced Retouching</li>
                  <li className="list__item">7-14 Day Turnaround</li>
                  <li className="list__item">Includes Solos (Limited)</li>
                </ul>

                <Link
                  href="/bookings"
                  className="btn btn--outline btn--block btn--primary"
                >
                  Request this Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <header>
        <h2 data-aos="fade-up" className="block__header">
          Check out my Portfolio!
        </h2>

        <section className="home__gallery">
          <Link
            data-aos="fade-right"
            className="home__gallery_option"
            href="/events"
          >
            <img src="/images/events/anjali_grad-1.jpg" alt="" />
          </Link>

          <Link
            data-aos="fade-left"
            className="home__gallery_option"
            href="/cars"
          >
            <img src="/images/exports/monterey-35.jpg" alt="" />
          </Link>
        </section>
      </header>
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
      {/* Scripts (converted from your bottom-of-body scripts) */}
    </>
  );
}
