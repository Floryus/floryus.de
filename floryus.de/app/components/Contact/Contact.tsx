import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div>
          <h1>
            <p className={styles.i}>Florian</p>
            <p className={styles.italic}>Schmidt</p>
            <p className={styles.italic}>Berlin</p>
          </h1>
          <h1>
            <p className={styles.italic}>Florian</p>
            <p className={styles.i}>Schmidt</p>
            <p className={styles.italic}>Berlin</p>
          </h1>
          <h1>
            <p className={styles.italic}>Florian</p>
            <p className={styles.italic}>Schmidt</p>
            <p className={styles.i}>Berlin</p>
          </h1>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.together}>LET'S</h1>
        <h1 className={styles.work}>WORK</h1>
        <h1 className={styles.together}>TOGETHER</h1>
      </div>
    </div>
  );
}
