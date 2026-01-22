import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Gallery.module.scss";
import { Reveal } from "@/components/common/Reveal";

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

        <Dialog.Root>
          <Reveal>
            <Dialog.Trigger asChild>
              <button
                className={styles.viewer}
                type="button"
                aria-label="Open full image"
              >
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  className={styles.mainImage}
                />
              </button>
            </Dialog.Trigger>
          </Reveal>

          <Reveal className={styles.thumbnails} delay={0.1}>
            {images.map((image, index) => (
              <button
                key={image.src}
                className={`${styles.thumbnail} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.thumbnailImg}
                />
              </button>
            ))}
          </Reveal>

          <Dialog.Portal>
            <Dialog.Overlay className={styles.lightboxOverlay} />
            <Dialog.Content
              className={styles.lightboxContent}
              aria-label="Image preview"
            >
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className={styles.lightboxImage}
              />
              <Dialog.Close className={styles.lightboxClose} aria-label="Close">
                ✕
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
