import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { CTAButton } from "./CTAButton";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
];

const GETTING_STARTED_URL =
  "https://docs.luxonis.com/hardware/platform/deploy/oak4-deployment-guide/oak4-getting-started";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <DesktopNav links={navLinks} />
        <CTAButton href={GETTING_STARTED_URL}>Get Started</CTAButton>
        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
