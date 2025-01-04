import React from "react";

import styles from "./Extras.module.css";

export const Extras = () => {
  return (
    <section className={styles.container} id="extras">
      <h2 className={styles.title}>Extras</h2>
      <div className={styles.content}>
        <p className={styles.description}>
            My hobbies! Coming soon :)
        </p>
      </div>
    </section>
  );
};
