"use client";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.top}>
        <h1>LET'S CONNECT</h1>
        <div className={styles.contactContainer}>
          <a
            className={styles.contactItem}
            href="https://discord.com/invite/v3qc5xj9Xc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} />
            Our Discord
          </a>

          <a
            className={styles.contactItem}
            href="https://www.instagram.com/official_abyteforall/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            official_abyteforall
          </a>
          <a
            className={styles.contactItem}
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
          <Link to="hero" smooth={true} duration={1000}>
            Top
          </Link>
          <Link to="mission" smooth={true} duration={1000}>
            Mission
          </Link>
          <Link to="operations" smooth={true} duration={1000}>
            Operations
          </Link>
          <Link to="opportunities" smooth={true} duration={1000}>
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
