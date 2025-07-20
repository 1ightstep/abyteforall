import styles from "./Hero.module.css";
import ByteWavesContainer from "@/components/ByteWavesContainer";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroMainContainer}>
        <h1 className={styles.heroTitle}>
          The new change has arrived. <br /> A new order will rise.
        </h1>
        <h3 className={styles.heroDescription}>
          A Byte For All is a new youth-led 501c3 nonprofit created to empower
          youth-powered innovations. We train developers and employ them to
          real-world projects that impact the world.
        </h3>
      </div>
      <ByteWavesContainer />
    </div>
  );
}
