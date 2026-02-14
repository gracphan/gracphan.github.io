import React from "react";
import styles from "./Updates.module.css";

export const Updates = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Updates</h2>
            <ul>
                <li>January 28, 2026 - Finished paint-by-number of Starry Night</li>
                <li>January 12, 2026 - Snoodle-Doodles Sticker Shop goes live!</li>
                <li>December 2025 - Traveled to Austria and Hungary!</li>
            </ul>
        </section>
    );
};