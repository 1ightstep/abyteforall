"use client";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { ScrambleTextPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      },
    });

    footerTl.to(".FOtitle-anim", {
      scrambleText: {
        text: "LET'S CONNECT",
        chars: "00110001",
      },
      duration: 1.5,
    });

    footerTl.fromTo(
      ".FOsocial-anim",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2 },
      "-=1"
    );
  }, []);

  return (
    <div className={styles.footer} id="footer" ref={footerRef}>
      <div className={styles.top}>
        <h1 className="FOtitle-anim">LET'S CONNECT</h1>
        <div className={styles.contactContainer}>
          <a
            className={`${styles.contactItem} FOsocial-anim`}
            href="https://discord.com/invite/v3qc5xj9Xc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} />
            Our Discord
          </a>

          <a
            className={`${styles.contactItem} FOsocial-anim`}
            href="https://www.instagram.com/official_abyteforall/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            official_abyteforall
          </a>
          <a
            className={`${styles.contactItem} FOsocial-anim`}
            href="mailto:abyteforall@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            abyteforall@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} A Byte For All. All rights reserved.</p>
        <div className={styles.navigationContainer}>
          <Link to="hero" smooth={true} duration={1000} offset={-550}>
            Top
          </Link>
          <Link to="mission" smooth={true} duration={1000} offset={-500}>
            Mission
          </Link>
          <Link to="operations" smooth={true} duration={1000} offset={-500}>
            Operations
          </Link>
          <Link to="opportunities" smooth={true} duration={1000} offset={-500}>
            Opportunities
          </Link>
          <Link to="faq" smooth={true} duration={1000}>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
