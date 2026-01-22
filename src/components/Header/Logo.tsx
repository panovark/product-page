import styles from "./Header.module.scss";

export function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <img src="/logo-white.svg" alt="Luxonis" className={styles.logoImg} />
    </a>
  );
}
