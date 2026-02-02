"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

type BookingPayload = {
  name: string;
  sessionType: string;
  email: string;
  partySize: number;
  location: string;
};

export default function BookingsPage() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;

    const payload: BookingPayload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      sessionType: (form.elements.namedItem("sessionType") as HTMLSelectElement)
        .value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      partySize: Number(
        (form.elements.namedItem("partySize") as HTMLInputElement).value,
      ),
      location: (form.elements.namedItem("location") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      setStatus("Request sent! I’ll get back to you soon.");
      form.reset();
    } catch (err: any) {
      setStatus(`Error: ${err.message ?? "Something went wrong."}`);
    }
  }

  return (
    <>
      <Navbar />
      <h2 className="gallery__header">Bookings</h2>

      <section className="block container block-plans">
        <div className="grid grid--1x3">
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
              </div>
            </div>
          </div>

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
              </div>
            </div>
          </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid--1x2-1">
        <h3 style={{ marginLeft: "4rem" }}>
          Fill out the form to request a booking.
        </h3>

        <form
          id="bookingForm"
          className="booking__form"
          onSubmit={handleSubmit}
        >
          <input
            className="input input__booking"
            name="name"
            placeholder="Name"
            required
          />

          <select
            className="input input__booking"
            name="sessionType"
            id="sessionType"
            required
            defaultValue=""
          >
            <option value="" disabled hidden>
              Plan Type
            </option>
            <option value="Solo / Duo">Solo/Duo Session</option>
            <option value="Group">Group Session</option>
            <option value="Event">Events</option>
          </select>

          <input
            className="input input__booking"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="input input__booking"
            name="partySize"
            type="number"
            min={1}
            placeholder="Party size"
            required
          />
          <input
            className="input input__booking"
            name="location"
            placeholder="Location"
            required
          />

          <button
            className="btn btn--accent btn--primary formSubmit"
            type="submit"
          >
            Send Request
          </button>

          <p id="status">{status}</p>
        </form>
      </div>
    </>
  );
}
