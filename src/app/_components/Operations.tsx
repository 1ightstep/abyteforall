"use client";
import styles from "./Operations.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

//trying something new with classnames instead for cleaner code
export default function Operations() {
  const operationsRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!operationsRef.current) return;
    const titleSplit = new SplitType(".title-anim");

    const operationsTl = gsap.timeline({
      scrollTrigger: {
        trigger: operationsRef.current,
        start: "top top",
      },
    });
    operationsTl.from(titleSplit.chars, {
      opacity: 0,
      stagger: 0.05,
      x: -10,
      duration: 0.5,
    });
    operationsTl.from(
      ".item-anim",
      {
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.5"
    );
    operationsTl.from(
      ".subtitle-anim",
      {
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.4"
    );
    operationsTl.from(
      ".description-anim",
      {
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.4"
    );

    gsap.to(operationsRef.current, {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: operationsRef.current,
        start: "bottom bottom",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className={styles.operations} ref={operationsRef} id="operations">
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h2 className="title-anim">Our Operations</h2>
        </div>
        <div className={styles.itemContainer}>
          <div className={`${styles.item} item-anim`}>
            <h3 className="subtitle-anim">Training</h3>
            <h4 className="description-anim">
              We equip aspiring web developers with foundational skills through
              structured coding experiences, mock projects, and guided
              mentorship. Trainees gain real-world exposure by working under our
              supervision, earning volunteer hours while building practical,
              portfolio-ready work.
            </h4>
          </div>
          <div className={`${styles.item} item-anim`}>
            <h3 className="subtitle-anim">Development</h3>
            <h4 className="description-anim">
              We deploy our trained developers to work on real-world
              projects—collaborating with local businesses and community
              partners to design and build custom websites and digital
              solutions. It’s where student skills meet real impact, turning
              practice into purpose.
            </h4>
          </div>
          <div className={`${styles.item} item-anim`}>
            <h3 className="subtitle-anim">Partnerships</h3>
            <h4 className="description-anim">
              We partner with schools, clubs, and other nonprofits to bring the
              best STEM opportunities to our members. By collaborating across
              communities, we create more chances for students to grow, lead,
              and make a real difference.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
