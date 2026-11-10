import JBLogo from "./JBLogo";
import styles from "./SiteHeader.module.css";

const tagline = ["Operations", "Technology", "Civic Engagement"];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Jeff Bledsoe home">
          <JBLogo />
          <span className={styles.name}>Jeff Bledsoe</span>
        </a>
        <ul className={styles.tagline} aria-label={tagline.join(", ")}>
          {tagline.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
