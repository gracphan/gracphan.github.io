import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.introContainer}>
          <h1 className={styles.title}>Hi, I'm Grace!</h1>
          <p className={styles.description}>
            I'm passionate about using technology to create innovative and meaningful solutions.
          </p>
        </div>
        <div className={styles.checkOutContainer}>
          <p className={styles.checkWork}>Check out my work</p>
          <img
            src={getImageUrl("hero/down-arrow.png")}
            alt="Down arrow"
            className={styles.downArrow}
          />
        </div>
      </div>
      <img
        src={getImageUrl("hero/IMG_1220.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
