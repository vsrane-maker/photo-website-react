"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid--1x2" style={{ paddingTop: "10rem" }}>
        <section>
          <header>
            <h2 style={{ paddingLeft: "2rem" }}>About Me</h2>
          </header>
          <p
            className="aboutMe__description"
            style={{
              lineHeight: "2",
              paddingRight: "2rem",
              fontSize: "1.8rem",
            }}
          >
            My name is Viraaj Rane. I'm currently a first year student at UC San
            Diego pursuing a Bachelor's degree in Computer Science. Photography
            has been a passion of mine for several years, and I specialize in
            wildlife photography as well as portrait photography. I love
            capturing the beauty of nature and the essence of people through my
            lens. However, I love to explore different genres such as sports and
            automotive photography.
            <br /> <br />
            I started my photography journey by posting on my Instagram for my
            friends to see. However, I quickly realized my small hobby was
            turning turning into something much bigger. As my skills in
            photography continued to get better, I was approached by a group of
            friends who asked to take their graduation pictures. This moment
            encouraged me to experiment with other forms of photography such as
            events, sports, and astrophotography.
            <br /> <br />
            Now, I am a professional event photographer that has the priviledge
            of capturing unforgettable moments for the people around me.
            Photography is a way I can capture the stories, adventures, and rare
            moments around me.
          </p>
        </section>
        <picture data-aos="fade-left">
          <source
            type="image/jpg"
            srcSet="images/resized/ViraajRane_pfp.jpg 1x, images/resized/ViraajRane_pfp_2x.jpg 2x"
          />
          <img
            className="feature__image"
            src="images/resized/ViraajRane_pfp_resized.jpg"
            alt=""
          />
        </picture>
      </div>
    </>
  );
}
