import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/grace-phan/" target="_blank" rel="noopener noreferrer">
          <img
            src={getImageUrl("contact/linkedin.png")}
            className={styles.image}
          />
        </a>
        <a href="mailto:gracephanpg@gmail.com">
          <img
            src={getImageUrl("contact/mail.png")}
            className={styles.image}
          />
        </a>
      </div>
    </footer>
  );
};
