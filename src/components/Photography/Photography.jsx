import React from "react";
import styles from "./Photography.module.css";
import { getImageUrl } from "../../utils";
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
        Ever since I figured out how buttons work, I have been photographing the world around me.
        Being able to capture moments with the people I love, the intricacies of the places I travel to, and the beauty of nature is why I love photography so much.
        </p>
        <p className={styles.description}>
          Shot using a Canon EOS M50.
        </p>
      </div>
      
      <div className={styles.gallery}>
        
        {/* First column */}
        <div className={styles.galleryColumn}>
          {firstColumnPhotos.map((photo, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={getImageUrl(photo.imageSrc)}
                alt={`Photo of ${photo.title}`}
                className={styles.image}
              />
              <p className={styles.caption}>
                <img src={getImageUrl("photography/locationIcon.png")} />
                {photo.location}
              </p>
            </div>
          ))}
        </div>

        {/* Second column */}
        <div className={styles.galleryColumn}>
          {secondColumnPhotos.map((photo, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={getImageUrl(photo.imageSrc)}
                alt={`Photo of ${photo.title}`}
                className={styles.image}
              />
              <p className={styles.caption}>
                <img src={getImageUrl("photography/locationIcon.png")} />
                {photo.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
