import styles from "./GetStarted.module.scss";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import { LINKS } from "@/constants/links";

export function GetStarted() {
  return (
    <Section
      id="get-started"
      title="Ready to Get Started?"
      subtitle="Follow our comprehensive guide to set up your OAK 4 D and start building amazing computer vision applications."
      background="gradient"
      centered
      className={styles.getStarted}
    >
      <Reveal delay={0.1}>
        <div className={styles.actions}>
          <Button href={LINKS.gettingStarted} external>
            Getting Started Guide
          </Button>
          <Button variant="secondary" href={LINKS.shopProduct} external>
            Buy OAK 4 D
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
