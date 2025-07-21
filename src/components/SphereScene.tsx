"use client";
import styles from "./SphereScene.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";

interface RotatingSphereProps {
  radius: number;
  speed: number;
  position: [number, number, number];
}

function RotatingSphere({ radius, speed, position }: RotatingSphereProps) {
  const sphereRef = useRef<THREE.Mesh>(null);
  useEffect(() => {
    if (sphereRef.current) {
      gsap.to(sphereRef.current.rotation, {
        y: Math.PI,
        duration: 1 / speed,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <group ref={sphereRef} position={position}>
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh>
        <sphereGeometry args={[radius + radius * 0.1, 32, 32]} />
        <meshBasicMaterial color="grey" wireframe transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

interface OrbitingSphereProps {
  centralRadius: number;
  orbitRadius: number;
  speed: number;
}

function OrbitingSphere({
  centralRadius,
  orbitRadius,
  speed,
}: OrbitingSphereProps) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1 / speed,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <group ref={groupRef}>
      <RotatingSphere
        radius={centralRadius * 0.2}
        speed={speed}
        position={[orbitRadius, 0, 0]}
      />
    </group>
  );
}

function randomPosition(min: number, max: number): [number, number, number] {
  let position: [number, number, number] = [
    Math.random() * (max - min + 1) + min,
    Math.random() * (max - min + 1) + min,
    Math.random() * (max - min + 1) + min,
  ];
  return position;
}

export default function SphereScene() {
  const [radius, setRadius] = useState(window.innerWidth / 1200);

  useEffect(() => {
    const onResize = () => {
      setRadius(window.innerWidth / 1200);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <Canvas className={styles.sphereScene} camera={{ position: [2, 5, 5] }}>
      <ambientLight />
      <RotatingSphere radius={radius} speed={0.3} position={[0, 0, 0]} />
      <OrbitingSphere
        centralRadius={radius * 0.2}
        orbitRadius={radius * 2}
        speed={0.24}
      />
      <OrbitingSphere
        centralRadius={radius * 0.25}
        orbitRadius={radius * 2.8}
        speed={0.19}
      />
      <OrbitingSphere
        centralRadius={radius * 0.27}
        orbitRadius={radius * 3.6}
        speed={0.16}
      />
      <OrbitingSphere
        centralRadius={radius * 0.22}
        orbitRadius={radius * 4.4}
        speed={0.13}
      />
      <OrbitingSphere
        centralRadius={radius * 0.7}
        orbitRadius={radius * 6.5}
        speed={0.04}
      />
      <OrbitingSphere
        centralRadius={radius * 0.65}
        orbitRadius={radius * 8.2}
        speed={0.03}
      />
      <OrbitingSphere
        centralRadius={radius * 0.55}
        orbitRadius={radius * 10.5}
        speed={0.01}
      />
      <OrbitingSphere
        centralRadius={radius * 0.5}
        orbitRadius={radius * 13}
        speed={0.006}
      />
      {Array.from({ length: 200 }).map((_, index) => {
        return (
          <mesh key={index} position={randomPosition(-100, 100)}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="black" />
          </mesh>
        );
      })}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
