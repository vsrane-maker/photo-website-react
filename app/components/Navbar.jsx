"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      id="navbar"
      className={`nav collapsible ${expanded ? "collapsible--expanded" : ""}`}
    >
      <Link href="/">
        <img
          style={{ width: "100px", height: "auto" }}
          src="/images/logo.png"
          alt=""
        />
      </Link>

      {/* Make the toggler handle the click (not the whole nav) */}
      <button
        type="button"
        className="nav__toggler"
        aria-expanded={expanded}
        aria-controls="nav-menu"
        onClick={() => setExpanded((v) => !v)}
      >
        <svg className="icon icon--black">
          <use xlinkHref="/images/sprite.svg#menu" />
        </svg>
      </button>

      <ul id="nav-menu" className="list nav__list collapsible__content">
        <li className="nav__item">
          <Link href="/gallery" onClick={() => setExpanded(false)}>
            Gallery
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/about" onClick={() => setExpanded(false)}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/bookings" onClick={() => setExpanded(false)}>
            Bookings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
