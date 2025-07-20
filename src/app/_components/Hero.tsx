"use client";
import styles from "./Hero.module.css";
import ByteWavesContainer from "@/components/ByteWavesContainer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType, { TargetElement } from "split-type";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    if (!titleRef.current || !descriptionRef.current) return;
    let titleSplit = new SplitType(titleRef.current);
    let descriptionSplit = new SplitType(descriptionRef.current);
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
        opacity: 0,
        stagger: 0.01,
        duration: 1.5,
      },
      "-=0.5"
    );
  });
  return (
    <div className={styles.hero}>
      <div className={styles.heroMainContainer}>
        <h1 className={styles.heroTitle} ref={titleRef}>
          The new change has arrived. <br /> A new order will rise.
        </h1>
        <h3 className={styles.heroDescription} ref={descriptionRef}>
          A Byte For All is a new youth-led 501c3 nonprofit created to empower
          youth-powered innovations. We train developers and employ them to
          real-world projects that impact the world.
        </h3>
      </div>
      <ByteWavesContainer />
    </div>
  );
}
