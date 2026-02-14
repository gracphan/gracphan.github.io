import React from "react";

import styles from "./Hero.module.css";
import { getAssetUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.introContainer}>
                <h1 className={styles.title}>Hi, I'm Grace!</h1>
                <p className={styles.description}>
                    I'm a developer who's passionate about working on tech that is creative and meaningful.
                </p>
            </div>
            <img
                src={getAssetUrl("IMG_9158.JPG", "hero")}
                alt="Picture of me"
                className={styles.heroImg}
            />
        </section>
    );
};