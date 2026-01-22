import styles from "./Header.module.scss";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
}

export function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={styles.cta}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
