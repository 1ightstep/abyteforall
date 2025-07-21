import styles from "./page.module.css";
import Hero from "./_components/Hero";
import Mission from "./_components/Mission";

export default function Main() {
  return (
    <main className={styles.Landing}>
      <Hero />
      <Mission />
    </main>
  );
}
