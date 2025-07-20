"use client";
import styles from "./ByteWavesContainer.module.css";
import ByteWave from "@/components/ByteWave";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function waveSize(prevSize: number, min: number = 5, max: number = 15) {
  let signApplier = prevSize < min ? 1 : Math.random() < 0.5 ? -1 : 1;
  signApplier = prevSize > max ? -1 : signApplier;
  return prevSize + signApplier * Math.random() * 3;
}

export default function ByteWavesContainer() {
  const numWaves = window.innerWidth / 7;
  let currSize = 0;

  useGSAP(() => {
    gsap.from("#all-byte-waves", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.005,
    });
  });
  return (
    <div className={styles.byteWavesContainer}>
      {Array.from({ length: numWaves }).map((_, index) => {
        currSize =
          index == 0
            ? waveSize(Math.random() * (25 - 10) + 10)
            : waveSize(currSize);

        return (
          <div key={index} id="all-byte-waves">
            <ByteWave key={index} length={currSize} />
          </div>
        );
      })}
    </div>
  );
}
