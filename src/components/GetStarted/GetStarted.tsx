import styles from "./GetStarted.module.scss";
import { Reveal } from "@/components/common/Reveal";
import { LINKS } from "@/constants/links";

export function GetStarted() {
  return (
    <section className={styles.getStarted} id="get-started">
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
              href={LINKS.gettingStarted}
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Getting Started Guide
            </a>
            <a
              href={LINKS.shopProduct}
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
