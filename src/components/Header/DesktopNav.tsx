import styles from "./Header.module.scss";

interface NavLink {
  label: string;
  href: string;
}

interface DesktopNavProps {
  links: NavLink[];
}

export function DesktopNav({ links }: DesktopNavProps) {
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <a key={link.href} href={link.href} className={styles.navLink}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
