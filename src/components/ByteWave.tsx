"use client";
import { useGSAP } from "@gsap/react";
import styles from "./ByteWave.module.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin);

type ByteWaveProps = {
  length: number;
};

function randomWave(length: number) {
  return Array.from({ length }, () => (Math.random() < 0.5 ? "0" : "1")).join(
    ""
  );
}

export default function ByteWave({ length }: ByteWaveProps) {
  const waveRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRange = 50;
  const isScrolling = useRef(false);

  useGSAP(() => {
    const updateWave = () => {
      const newWave = randomWave(length);
      gsap.to(waveRef.current, {
        text: { value: newWave },
        duration: 0.05,
        ease: "power1.inOut",
      });
    };

    const interval = setInterval(updateWave, 100);

    const handleMouseMove = (e: MouseEvent) => {
      if (isScrolling.current) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const middleX = (rect.left + rect.right) / 2;
      const middleY = (rect.top + rect.bottom) / 2;
      const distanceX = Math.abs(e.clientX - middleX);
      const distanceY = Math.abs(e.clientY - middleY);

      const factorX = 0.1;
      const factorY = 0.15;

      const drop =
        Math.max(0, 40 - distanceX * factorX) +
        (window.innerHeight - distanceY) * factorY;

      const withinRange =
        e.clientX >= rect.left - effectRange &&
        e.clientX <= rect.right + effectRange;

      gsap.to(containerRef.current, {
        y: withinRange ? drop : 0,
        duration: 0.5,
        ease: "linear",
      });
    };

    const scrollTimeoutRef = { current: 0 as any };

    const handleScroll = () => {
      isScrolling.current = true;
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrolling.current = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [length]);

  return (
    <div className={styles.byteWaveContainer} ref={containerRef}>
      <p className={styles.byteWave} ref={waveRef}>
        {randomWave(length)}
      </p>
    </div>
  );
}
