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
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:myemail@email.com">gracphan@umich.edu</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/grace-phan/" target="_blank">linkedin.com/in/grace-phan/</a>
        </li>
      </ul>
    </footer>
  );
};
