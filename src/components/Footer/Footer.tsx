import styles from "./Footer.module.scss";

const links = [
  { label: "Documentation", href: "https://docs.luxonis.com" },
  { label: "Shop", href: "https://shop.luxonis.com" },
  { label: "GitHub", href: "https://github.com/luxonis" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src="/logo-white.svg" alt="Luxonis" className={styles.logo} />
          <p className={styles.tagline}>Robotic vision made simple.</p>
        </div>

        <nav className={styles.links}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className={styles.copyright}>
          © {year} Luxonis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
