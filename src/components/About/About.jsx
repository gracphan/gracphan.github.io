import React from "react";

import styles from "./About.module.css";

export const About = ({ id }) => {
  return (
    <section className={styles.container} id={id}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <p className={styles.description}>
            I'm a sophomore at the University of Michigan studying Computer Science with a minor in Economics.
            I have spent the majority of my life in Okemos, Michigan, but I've also lived in Connecticut and Massachusetts.
            I'm passionate about software development because of its endless creative possibilities, and I love the process of transforming ideas into tangible products.
        </p>
        <p className={styles.description}>
            When I'm away from my computer, you'll find me playing my violin or guitar, baking, running, singing, or reading!
        </p>
      </div>
    </section>
  );
};
