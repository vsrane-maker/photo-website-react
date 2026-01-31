import Navbar from "../components/Navbar";
import Link from "next/link";

export default function BookingsPage() {
  return (
    <>
      <Navbar />
      <main className="block container">
        <header className="block__header">
          <h1>Bookings</h1>
          <p>Request a session.</p>
        </header>

        <p>
          <Link href="/" className="link-arrow">
            Back to Home
          </Link>
        </p>
      </main>
    </>
  );
}
