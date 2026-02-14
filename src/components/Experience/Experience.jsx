import React, { useEffect, useRef } from "react";
import experiences from "../../data/experience.json";
import styles from "./Experience.module.css";

export const Experience = ({ id }) => {
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.container} id={id}>
            <h2 className={styles.title}>Work Experience</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (itemsRef.current[idx] = el)}
                        className={`${styles.timelineItem} ${idx % 2 === 0 ? styles.left : styles.right
                            }`}
                    >
                        <span className={styles.date}>{exp.date}</span>

                        <div className={styles.content}>
                            <h3>{exp.company}</h3>
                            <h4>{exp.position}</h4>
                            <p><em>{exp.location}</em></p>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
