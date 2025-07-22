"use client";
import styles from "./ByteWavesContainer.module.css";
import ByteWave from "@/components/ByteWave";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

function waveSize(prevSize: number, min: number = 5, max: number = 15) {
  let signApplier = prevSize < min ? 1 : Math.random() < 0.5 ? -1 : 1;
  signApplier = prevSize > max ? -1 : signApplier;
  return prevSize + signApplier * Math.random() * 3;
}

export default function ByteWavesContainer() {
  const [numWaves, setNumWaves] = useState(0);
  let currSize = 0;
  useEffect(() => {
    setNumWaves(Math.floor(window.innerWidth / 7));
  }, []);

  useEffect(() => {
    if (numWaves > 0) {
      gsap.fromTo(
        ".all-byte-waves",
        {
          opacity: 0,
          y: 40,
          x: 20,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: 0.02,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [numWaves]);

  if (numWaves === 0) return null;
  return (
    <div className={styles.byteWavesContainer}>
      {Array.from({ length: numWaves }).map((_, index) => {
        currSize =
          index === 0
            ? waveSize(Math.random() * (25 - 10) + 10)
            : waveSize(currSize);

        return (
          <div key={index} className="all-byte-waves" style={{ opacity: 0 }}>
            <ByteWave length={currSize} />
          </div>
        );
      })}
    </div>
  );
}
