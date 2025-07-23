"use client";
import styles from "./Faq.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const faqRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const titleSplit = new SplitType(".FAQtitle-anim");
    const faqTl = gsap.timeline({
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top top",
      },
    });

    faqTl.from(titleSplit.chars, {
      duration: 0.4,
      stagger: 0.09,
      y: 100,
    });

    faqTl.from(
      ".FAQitem-anim",
      {
        width: 0,
        duration: 2,
        stagger: 0.05,
        ease: "power2.inOut",
      },
      "-=0.5"
    );
  }, []);

  let allItems: HTMLElement[] | null;
  useEffect(() => {
    allItems = gsap.utils.toArray(".FAQitem-anim");
  }, []);

  const removeActive = () => {
    if (!allItems) return;
    allItems.forEach((e, _) => {
      e.classList.remove(styles.answerActive);
    });
  };
  return (
    <div className={styles.faq} ref={faqRef} id="faq">
      <div className={styles.title}>
        <h2 className="FAQtitle-anim">FAQ</h2>
      </div>
      <div className={styles.questionsContainer}>
        <div
          className={`${styles.questionItem} FAQitem-anim`}
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.answerActive);
          }}
        >
          <div className={styles.question}>
            <h3>What is A Byte For All?</h3>
          </div>
          <div className={styles.answer}>
            <h4>
              A Byte For All is a student-led nonprofit providing free tech
              education and project-based opportunities to help youth gain
              real-world skills and make a measurable impact in their
              communities.
            </h4>
          </div>
        </div>
        <div
          className={`${styles.questionItem} FAQitem-anim`}
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.answerActive);
          }}
        >
          <div className={styles.question}>
            <h3>Who can join?</h3>
          </div>
          <div className={styles.answer}>
            <h4>
              Any motivated student—no coding experience needed. We have
              structured pathways for beginners, designers, developers, and
              aspiring leaders.
            </h4>
          </div>
        </div>
        <div
          className={`${styles.questionItem} FAQitem-anim`}
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.answerActive);
          }}
        >
          <div className={styles.question}>
            <h3> What kinds of projects will I work on?</h3>
          </div>
          <div className={styles.answer}>
            <h4>
              Websites for nonprofits, internal tools, community apps, and more.
              All projects are impactful and benefit real-world organizations.
            </h4>
          </div>
        </div>
        <div
          className={`${styles.questionItem} FAQitem-anim`}
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.answerActive);
          }}
        >
          <div className={styles.question}>
            <h3>How can my organization work with you?</h3>
          </div>
          <div className={styles.answer}>
            <h4>
              We offer free website and tech services to nonprofits, small
              businesses, and community organizations. We also partner with
              schools and programs to deliver tech workshops or lead STEM
              events.
            </h4>
          </div>
        </div>
        <div
          className={`${styles.questionItem} FAQitem-anim`}
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.answerActive);
          }}
        >
          <div className={styles.question}>
            <h3>How do you maintain quality as a student-led team?</h3>
          </div>
          <div className={styles.answer}>
            <h4>
              Unlike many student groups, our leadership includes developers
              with real-world experience. Every project is either led or
              overseen by someone with proven web development skills, ensuring
              partners get reliable and high-quality results.
            </h4>
          </div>
        </div>
        <div
          className={`${styles.questionItem} FAQitem-anim`}
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.answerActive);
          }}
        >
          <div className={styles.question}>
            <h3>My organization needs something custom—can you do that?</h3>
          </div>
          <div className={styles.answer}>
            <h4>
              Yes. Because our leadership includes experienced developers, we’re
              capable of handling custom builds and not just cookie-cutter
              templates. We work with you to understand your needs and develop
              tailored solutions.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
