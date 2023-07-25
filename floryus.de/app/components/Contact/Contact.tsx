import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div>
          <h1>
            <p className={styles.i}>Florian</p> Schmidt Berlin
          </h1>
          <h1>
            Florian <p className={styles.i}>Schmidt</p> Berlin
          </h1>
          <h1>
            Florian Schmidt <p className={styles.i}>Berlin</p>
          </h1>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.together}>LET'S</h1>
        <h1 className={styles.work}>
          <p className={styles.workAnimation}>WOR</p>K
        </h1>
        <h1 className={styles.together}>TOGETHER</h1>
      </div>
    </div>
  );
}
