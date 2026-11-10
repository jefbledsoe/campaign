import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>
          2026 Campaign for Westfield-Washington Township Trustee
        </p>
        <h1 className={styles.title}>Thank you, Westfield-Washington.</h1>
        <p className={styles.lede}>
          The results weren&apos;t what we hoped for. But together we pushed our
          township and our city to the left, and that change doesn&apos;t go
          away on election night.
        </p>
      </div>
    </section>
  );
}
