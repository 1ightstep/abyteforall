import styles from "./page.module.css";
import Hero from "./_components/Hero";
import Mission from "./_components/Mission";
import Operations from "./_components/Operations";
import Opportunities from "./_components/Opportunities";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Main() {
  return (
    <main className={styles.landing}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Description" className={styles.logo} />
      </div>
      <Hero />
      <Mission />
      <Operations />
      <Opportunities />
      <Faq />
      <Footer />
    </main>
  );
}
