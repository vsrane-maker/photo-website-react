import Navbar from "../components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="block container">
        <header className="block__header">
          <h1>About</h1>
          <p>Learn more about me.</p>
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
