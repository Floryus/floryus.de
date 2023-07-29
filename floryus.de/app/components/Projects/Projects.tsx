import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1 className={styles.h1}>Projects</h1>
        <div className={styles.projectContainer1}>
          <h1 className={styles.title}>RiddleRunner</h1>
          <p className={styles.i}>The online game, you don't play online.</p>
          <p className={styles.text}>
            With RiddleRunner, the entire city is your playground. Play a new
            version of hide and seek not made for kids.
          </p>
        </div>

        <div className={styles.projectContainer2}>
          <h1 className={styles.title}>BreakTheIce</h1>
          <p className={styles.i}>Icebreaker, with anti-bad guarantee.</p>
          <p className={styles.text}>
            Unlock the art of connection with BreakTheIce – where meeting new
            people feels as effortless as gliding on ice.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn more</button>
        </div>
      </div>
    </div>
  );
}
