import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  external = false,
  children,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(styles[variant], className)}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </a>
  );
}
