import React from "react";
import styles from "./Photography.module.css";
import { getAssetUrl } from "../../utils";
import photos from "../../data/photos.json";

export const Photography = () => {
    const firstColumnPhotos = [];
    const secondColumnPhotos = [];

    // Distribute photos into each column
    photos.forEach((photo, index) => {
        if (index % 2 === 0) {
            firstColumnPhotos.push(photo);
        } else {
            secondColumnPhotos.push(photo);
        }
    });

    return (
        <section className={styles.container}>
            <div className={styles.introContainer}>
                <h1 className={styles.title}>Photography</h1>
                <p className={styles.description}>
                    I use photography as a way of capturing the beauty of the people and places around me!
                </p>
                <p className={styles.description}>
                    Shot using a Canon EOS M50.
                </p>
            </div>

            <div className={styles.gallery}>

                {/* First column */}
                <div className={styles.galleryColumn}>
                    {firstColumnPhotos.map((photo, index) => {
                        return (
                            <div key={index} className={styles.imageContainer}>
                                <img
                                    src={getAssetUrl(photo.imageSrc, "photography")}
                                    alt={`Photo of ${photo.title}`}
                                    className={styles.image}
                                />
                                <p className={styles.caption}>
                                    <img src={getAssetUrl("locationIcon.png", "photography")} />
                                    {photo.location}
                                </p>
                            </div>
                        );
                    })}

                </div>

                {/* Second column */}
                <div className={styles.galleryColumn}>
                    {secondColumnPhotos.map((photo, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img
                                src={getAssetUrl(photo.imageSrc, "photography")}
                                alt={`Photo of ${photo.title}`}
                                className={styles.image}
                            />
                            <p className={styles.caption}>
                                <img src={getAssetUrl("locationIcon.png", "photography")} />
                                {photo.location}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};