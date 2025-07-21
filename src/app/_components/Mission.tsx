import styles from "./Mission.module.css";
import SphereScene from "@/components/SphereScene";

export default function Mission() {
  return (
    <div className={styles.mission}>
      <div className={styles.textContent}>
        <h2>Our Mission</h2>
        <h3>
          We’re part of a generation that wants to do more than just code — we
          want to shape the future. At A Byte For All, we don’t just teach tech;
          we create real opportunities to build, collaborate, and grow as
          developers. Join us to make an impact — not just on the world, but on
          your journey.
        </h3>
      </div>
      <div className={styles.sphereSceneContainer}>
        <SphereScene />
      </div>
    </div>
  );
}
