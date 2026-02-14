import React, { useRef } from "react";
import styles from "./ProjectCard.module.css";
import { getAssetUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, link, demoVideo } }) => {
    const videoRef = useRef();
    const hasVideo = Boolean(demoVideo);

    const handleMouseEnter = () => {
        if (hasVideo) videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        if (hasVideo) {
            videoRef.current?.pause();
            videoRef.current.currentTime = 0; // optional reset
        }
    };

    return (
        <div 
            className={`${styles.container} ${hasVideo ? styles.hasVideo : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.mediaWrapper}>
                <img
                    src={getAssetUrl(imageSrc, "projects")}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />

                {hasVideo && (
                    <video
                        ref={videoRef}
                        src={getAssetUrl(demoVideo, "projects")}
                        className={styles.video}
                        muted
                        loop
                        preload="metadata"
                    />
                )}
            </div>

            <a href={link || '#'} target="_blank" rel="noopener noreferrer">
                <h3 className={styles.title}>{title}</h3>
            </a>

            <p className={styles.description}>{description}</p>

            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};
