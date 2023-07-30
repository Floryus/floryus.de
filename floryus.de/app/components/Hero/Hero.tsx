import Image from "next/image";
import styles from "./Hero.module.css";

import github from "../../../public/icons/github.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import twitter from "../../../public/icons/twitter.svg";
import mail from "../../../public/icons/mail.svg";

import avatar from "../../../public/avatar.png";

export default function Hero() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.text}>
        <h1 className={styles.header}>
          Hi👋
          <br />
          I’m <p className={styles.accent}>Florian.</p>
        </h1>
        <h2 className={styles.subheader}>
          Student of business and IT, <br /> working at SAP.
        </h2>
      </div>
      <div className={styles.links}>
        <a>
          <Image className={styles.icon} src={github} alt="GitHub" />
        </a>
        <a>
          <Image className={styles.icon} src={twitter} alt="Twitter" />
        </a>
        <a>
          <Image className={styles.icon} src={linkedin} alt="LinkedIn" />
        </a>
        <a>
          <Image className={styles.icon} src={mail} alt="Mail" />
        </a>
      </div>
      <div className={styles.pic}>
        <Image className={styles.img} src={avatar} alt="That's me!" />
      </div>
      <div className={styles.cta}>
        <div className={styles.button}>
          <button> Learn more </button>
        </div>
      </div>
    </div>
  );
}
