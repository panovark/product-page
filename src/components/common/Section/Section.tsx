import clsx from "clsx";
import styles from "./Section.module.scss";

type BackgroundVariant = "dark" | "secondary" | "gradient";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  background?: BackgroundVariant;
  centered?: boolean;
  children: React.ReactNode;
  className?: string;
}

const bgClasses: Record<BackgroundVariant, string> = {
  dark: styles.bgDark,
  secondary: styles.bgSecondary,
  gradient: styles.bgGradient,
};

export function Section({
  id,
  title,
  subtitle,
  background = "dark",
  centered = false,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={clsx(
        styles.section,
        bgClasses[background],
        centered && styles.centered,
        className,
      )}
      id={id}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
