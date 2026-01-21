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
        <a href="/" className={styles.logo}>
          <img src="/logo-white.svg" alt="Luxonis" />
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://docs.luxonis.com/hardware/platform/deploy/oak4-deployment-guide/oak4-getting-started"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
