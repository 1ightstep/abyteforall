"use client";
import styles from "./Hero.module.css";
import ByteWavesContainer from "@/components/ByteWavesContainer";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current || !descriptionRef.current) return;
    const titleSplit = new SplitType(titleRef.current);
    const descriptionSplit = new SplitType(descriptionRef.current);
    const heroTl = gsap.timeline();
    heroTl.from(titleSplit.chars, {
      opacity: 0,
      stagger: 0.01,
      rotateX: -70,
      rotateY: 5,
    });
    heroTl.from(
      descriptionSplit.chars,
      {
        trigger: heroRef.current,
        opacity: 0,
        stagger: 0.01,
        duration: 1.5,
      },
      "-=0.5"
    );

    gsap.to(heroRef.current, {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className={styles.hero} ref={heroRef} id="hero">
      <div className={styles.heroMainContainer}>
        <h1 className={styles.heroTitle} ref={titleRef}>
          Change has arrived. <br />A new path forward begins today.
        </h1>
        <h3 className={styles.heroDescription} ref={descriptionRef}>
          A Byte For All is a youth-led nonprofit project fiscally sponsored
          under Hack Club’s 501(c)(3) status. We empower student-driven
          innovation by training young developers and connecting them with
          real-world projects that make a tangible impact.
        </h3>
      </div>
      <ByteWavesContainer />
    </div>
  );
}
