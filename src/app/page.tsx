import styles from "./page.module.css";
import Hero from "./_components/Hero";
import Mission from "./_components/Mission";
import Operations from "./_components/Operations";
import Opportunities from "./_components/Opportunities";

export default function Main() {
  return (
    <main className={styles.Landing}>
      <Hero />
      <Mission />
      <Operations />
      <Opportunities />
    </main>
  );
}
