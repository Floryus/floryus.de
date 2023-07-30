import Image from "next/image";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div>
      <div className={styles.grid}></div>
      <h1>Skills</h1>
      <div className={styles.row}>
        <Image src="" alt="TypeScript" />
        <p></p>
      </div>
    </div>
  );
}
