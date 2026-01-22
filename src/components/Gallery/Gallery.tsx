import { useState } from "react";
import styles from "./Gallery.module.scss";

const images = [
  { src: "/OAK_D_1.webp", alt: "OAK 4 D Front View" },
  { src: "/OAK_D_2.webp", alt: "OAK 4 D Side View" },
  { src: "/OAK_D_3.webp", alt: "OAK 4 D Angle View" },
  { src: "/OAK_D_4.webp", alt: "OAK 4 D Back View" },
  { src: "/OAK_D_5.webp", alt: "OAK 4 D Perspective" },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.container}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.subtitle}>Explore the OAK 4 D from every angle</p>

        <div className={styles.viewer}>
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={image.src}
              className={`${styles.thumbnail} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.thumbnailImg}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
