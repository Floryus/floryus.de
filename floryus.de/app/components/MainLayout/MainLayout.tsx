import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.hero}>
          <Hero />
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
        <div className={styles.projects}>
          <Projects />
        </div>
        <div className={styles.tech}>
          <Skills />
        </div>
      </div>
      <div>
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            <a className={styles.footerTextA}>About</a> -{" "}
            <a className={styles.footerTextB}>Projects</a> -{" "}
            <a className={styles.footerTextC}>Skills</a> -{" "}
            <a className={styles.footerTextD}>Legal</a>
          </p>
        </footer>
      </div>
    </>
  );
}
