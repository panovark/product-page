import styles from "./GetStarted.module.scss";
import { Reveal } from "@/components/common/Reveal";

export function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <Reveal>
          <h2 className={styles.title}>Ready to Get Started?</h2>
          <p className={styles.subtitle}>
            Follow our comprehensive guide to set up your OAK 4 D and start
            building amazing computer vision applications.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.actions}>
            <a
              href="https://docs.luxonis.com/hardware/platform/deploy/oak4-deployment-guide/oak4-getting-started"
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Getting Started Guide
            </a>
            <a
              href="https://shop.luxonis.com/products/oak-4-d"
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy OAK 4 D
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
