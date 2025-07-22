"use client";
import styles from "./Opportunities.module.css";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Opportunities() {
  const rolesContainerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const startYRef = useRef(0);
  const scrollTopRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!rolesContainerRef.current) return;
    isMouseDownRef.current = true;
    startYRef.current = e.pageY - rolesContainerRef.current.offsetTop;
    scrollTopRef.current = rolesContainerRef.current.scrollTop;
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rolesContainerRef.current || !isMouseDownRef.current) return;
    e.preventDefault();
    const y = e.pageY - rolesContainerRef.current.offsetTop;
    const walk = (y - startYRef.current) * 1.5;
    rolesContainerRef.current.scrollTop = scrollTopRef.current - walk;
  };

  const opportunitiesRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const titleSplit = new SplitType(".OPPtitle-anim");
    const descriptionSplit = new SplitType(".OPPdescription-anim");

    const oppoTl = gsap.timeline({
      scrollTrigger: {
        trigger: opportunitiesRef.current,
        start: "top top",
        markers: true,
      },
    });

    oppoTl.from(titleSplit.chars, {
      opacity: 0,
      stagger: 0.05,
      x: -10,
      duration: 0.5,
    });

    oppoTl.from(
      descriptionSplit.chars,
      {
        opacity: 0,
        stagger: 0.01,
        duration: 0.5,
      },
      "-=0.5"
    );

    oppoTl.from(
      ".OPProles-container-anim",
      {
        opacity: 0,
        duration: 1,
      },
      "-=0.8"
    );

    oppoTl.from(
      ".OPProles-item-anim",
      {
        stagger: 0.05,
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className={styles.opportunities} ref={opportunitiesRef}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className="OPPtitle-anim">Opportunities</h2>
          <h3 className="OPPdescription-anim">
            Opportunities at A Byte For All let you make real impact—helping
            nonprofits, supporting local businesses, and expanding STEM access
            in your community. Gain hands-on experience, grow your skills, and
            be part of something that actually matters.
          </h3>
        </div>
        <div
          className={`${styles.rolesContainer} OPProles-container-anim`}
          ref={rolesContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className={`${styles.rolesItem} OPProles-item-anim`}>
            <h3>General Helper</h3>
            <h4>
              General Helpers support operations by designing posters, assisting
              with outreach materials, writing MOUs, and helping partner
              organizations during events. Their contributions are vital—and
              they earn volunteer hours for their time and dedication.
            </h4>
          </div>
          <div className={`${styles.rolesItem} OPProles-item-anim`}>
            <h3>Outreach</h3>
            <h4>
              Outreach team members lead our community expansion. They build
              relationships, promote events, and spread our mission to schools,
              clubs, and beyond—amplifying our reach and engagement.
            </h4>
          </div>
          <div className={`${styles.rolesItem} OPProles-item-anim`}>
            <h3>Trainee</h3>
            <h4>
              Trainees begin their journey by learning web development through
              guided lessons, mock projects, and mentorship. This stage builds a
              strong foundation to prepare members for real-world roles.
            </h4>
          </div>
          <div className={`${styles.rolesItem} OPProles-item-anim`}>
            <h3>UI/UX Designer</h3>
            <h4>
              For creative minds—UI/UX Designers craft user-friendly, visually
              appealing experiences. They blend aesthetics and function to bring
              digital ideas to life, collaborating closely with developers to
              make meaningful designs.
            </h4>
          </div>
          <div className={`${styles.rolesItem} OPProles-item-anim`}>
            <h3>Developer</h3>
            <h4>
              Developers are the core of our impact. After training, they’re
              deployed to real-world projects—creating websites and tools for
              local organizations. Working in teams, they earn volunteer hours
              and build their portfolios while creating measurable change.
            </h4>
          </div>
          <div className={`${styles.rolesItem} OPProles-item-anim`}>
            <h3>Partnership Instructor</h3>
            <h4>
              Partnership Instructors are sent to our partner schools and
              nonprofits to lead STEM education workshops. They serve as
              representatives of our mission, spreading knowledge to new
              communities.
            </h4>
          </div>
          <div className={styles.rolesItem}>
            <h3>Instructor/Trainer</h3>
            <h4>
              Trainers guide trainees through their learning journeys—hosting
              workshops, reviewing projects, and offering mentorship. They
              ensure each new developer is ready for impactful work.
            </h4>
          </div>
          <div className={styles.rolesItem}>
            <h3>Team Manager</h3>
            <h4>
              Team Managers oversee squads of developers (typically 4 +
              themselves). They coordinate workflow, maintain quality, and
              ensure smooth execution—acting as both leaders and developers.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
