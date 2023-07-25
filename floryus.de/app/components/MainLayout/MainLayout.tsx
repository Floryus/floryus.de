import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
      <div className={styles.projects}>Projects</div>
      <div className={styles.tech}>Tech</div>
    </div>
  );
}
