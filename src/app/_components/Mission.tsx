"use client";
import styles from "./Mission.module.css";
import SphereScene from "@/components/SphereScene";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const missionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !titleRef.current ||
      !descriptionRef.current ||
      !coverRef.current ||
      !missionRef.current
    )
      return;
    const titleSplit = new SplitType(titleRef.current);
    const descriptionSplit = new SplitType(descriptionRef.current);

    const missionTl = gsap.timeline({
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top top",
      },
    });
    missionTl.from(titleSplit.chars, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      x: -10,
    });
    missionTl.from(
      descriptionSplit.chars,
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.01,
      },
      "-=0.5"
    );
    missionTl.to(coverRef.current, {
      opacity: 0,
      duration: 2,
    });
  }, []);
  return (
    <div className={styles.mission} ref={missionRef} id="mission">
      <div className={styles.textContent}>
        <h2 ref={titleRef}>Our Mission</h2>
        <h3 ref={descriptionRef}>
          We’re part of a generation that wants to do more than just code — we
          want to shape the future. At A Byte For All, we don’t just teach tech;
          we create real opportunities to build, collaborate, and grow as
          developers. Join us to make an impact — not just on the world, but on
          your journey.
        </h3>
      </div>
      <div className={styles.cover} ref={coverRef}></div>
      <div className={styles.sphereSceneContainer}>
        <SphereScene />
      </div>
    </div>
  );
}
