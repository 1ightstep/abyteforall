"use client";
import { useGSAP } from "@gsap/react";
import styles from "./ByteWave.module.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useState, useEffect, useRef } from "react";
gsap.registerPlugin(TextPlugin);

//umm i am no professional developer, maybe just too lazy to optimize it in
//ByteWave container by only using one listener
// i am so sorry for your eyes reader
type ByteWaveProps = {
  length: number;
};

function randomWave(length: number) {
  return Array.from({ length }, () => (Math.random() < 0.5 ? "0" : "1"));
}

export default function ByteWave({ length }: ByteWaveProps) {
  const effectRange = 50;
  let [wave, setWave] = useState(() => randomWave(length));
  const waveRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let rect = containerRef.current?.getBoundingClientRect();
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      if (rect) {
        let middleX = (rect.left + rect.right) / 2;
        let middleY = (rect.top + rect.bottom) / 2;
        const factorX = 0.1;
        const factorY = 0.15;

        const distanceX = Math.abs(mouseX - middleX);
        const distanceY = Math.abs(mouseY - middleY);

        const drop =
          Math.max(0, 40 - distanceX * factorX) +
          (window.innerHeight - distanceY) * factorY;

        if (
          mouseX >= rect.left - effectRange &&
          mouseX <= rect.right + effectRange
        ) {
          gsap.to(containerRef.current, {
            y: drop,
            duration: 0.5,
            ease: "linear",
          });
        } else {
          gsap.to(containerRef.current, {
            y: 0,
            duration: 0.5,
            ease: "linear",
          });
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setWave(randomWave(length));
      gsap.to(waveRef.current, {
        text: {
          value: wave.join(""),
        },
        duration: 0.05,
        ease: "power1.inOut",
        onComplete: () => {
          setWave(randomWave(length));
        },
      });
    }, 100);
    return () => clearInterval(interval);
  }, [wave]);

  return (
    <div className={styles.byteWaveContainer} ref={containerRef}>
      <p className={styles.byteWave} ref={waveRef}>
        {wave.map((char, index) => {
          return <span key={index}>{char}</span>;
        })}
      </p>
    </div>
  );
}
