import Navbar from "../components/Navbar";
import Link from "next/link";

export default function naturePage() {
  return (
    <>
      <Navbar />

      <h2 className="gallery__header">Nature</h2>

      <section className="masonry--gallery">
        <img src="/images/indiaBird.jpg" alt="" />
        <img src="/images/fortAmer-2.jpg" alt="" />
        <img src="/images/peacock-5.jpg" alt="" />
        <img src="/images/CoyoteHills_1-1-24-53.jpg" alt="" />
        <img src="/images/sanjayGandhi-1.jpg" alt="" />
        <img src="/images/milkyWay2-1.jpg" alt="" />
        <img src="/images/coyoteHills_12-30-24 (2 of 5).jpg" alt="" />
        <img src="/images/COYOTEHILLS-3.jpg" alt="" />
        <img src="/images/fortAmer-3.jpg" alt="" />
        <img src="/images/mounttamalpais-23.jpg" alt="" />
        <img src="/images/mounttamalpais-43-2.jpg" alt="" />
        <img src="/images/walmartPrinting (2 of 4).jpg" alt="" />
      </section>
    </>
  );
}
