import styles from "./JBLogo.module.css";

// Column-style mark: two thin capital bars, "JB", then a solid base.
export default function JBLogo() {
  return (
    <span className={styles.mark} aria-hidden="true">
      <span className={styles.thin} />
      <span className={styles.thin} />
      <span className={styles.letters}>JB</span>
      <span className={styles.base} />
    </span>
  );
}
