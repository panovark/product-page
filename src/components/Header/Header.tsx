import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { CTAButton } from "./CTAButton";
import { MobileMenu } from "./MobileMenu";
import { LINKS } from "@/constants/links";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <DesktopNav links={navLinks} />
        <CTAButton href={LINKS.gettingStarted}>Get Started</CTAButton>
        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
