import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import clsx from "clsx";
import styles from "./Gallery.module.scss";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";

const images = [
  { src: "/OAK_D_1.webp", alt: "OAK 4 D Front View" },
  { src: "/OAK_D_2.webp", alt: "OAK 4 D Side View" },
  { src: "/OAK_D_3.webp", alt: "OAK 4 D Angle View" },
  { src: "/OAK_D_4.webp", alt: "OAK 4 D Back View" },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section
      id="gallery"
      title="Gallery"
      subtitle="Explore the OAK 4 D from every angle"
      background="dark"
    >
      <Reveal>
        <button
          className={styles.viewer}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open full image"
        >
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className={styles.mainImage}
          />
        </button>
      </Reveal>

      <Reveal className={styles.thumbnails} delay={0.1}>
        {images.map((image, index) => (
          <button
            key={image.src}
            className={clsx(
              styles.thumbnail,
              index === activeIndex && styles.active,
            )}
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

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={activeIndex}
        slides={images}
        on={{ view: ({ index }) => setActiveIndex(index) }}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
      />
    </Section>
  );
}
