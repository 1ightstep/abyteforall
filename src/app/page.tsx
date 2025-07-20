import styles from "./page.module.css";
import Hero from "./_components/Hero";

export default function Main() {
  return (
    <main className={styles.Landing}>
      <Hero />
    </main>
  );
}
