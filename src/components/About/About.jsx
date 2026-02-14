import React from "react";
import styles from "./About.module.css";

export const About = ({ id }) => {
    return (
        <section className={styles.container} id={id}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <p className={styles.description}>
                    I'm a junior at the University of Michigan studying Computer Science.
                    I have spent the majority of my life in Okemos, Michigan, but I've also lived in Connecticut and Massachusetts.
                    I'm passionate about software development because of its endless creative possibilities and ability to impact.
                </p>
                <p className={styles.description}>
                    When I'm away from my computer, you'll find me playing my violin in the Michigan Pops Orchestra,
                    baking whatever sweet treat I'm craving at the moment,
                    drawing for my <a href="https://www.redbubble.com/people/snoodle-doodles/shop?asc=u" target="_blank">sticker shop</a>,
                    or running!
                </p>
            </div>
        </section>
    )
}