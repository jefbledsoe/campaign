import styles from "./StayConnected.module.css";

const links = [
  { label: "Facebook", href: "https://www.facebook.com/TheJeffBledsoeHQ", external: true },
  { label: "TikTok", href: "https://www.tiktok.com/@thejeffbledsoehq", external: true },
  { label: "Email Jeff", href: "mailto:Info@TheJeffBledsoeHQ.com", external: false },
];

export default function StayConnected() {
  return (
    <section className={styles.section}>
      <div className={`reading ${styles.inner}`}>
        <h2 className={styles.heading}>Stay connected</h2>
        <p className={styles.text}>
          The work in Westfield-Washington keeps going. Follow along, and speak
          up and be heard.
        </p>
        <div className={styles.buttons}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.button} ${link.external ? styles.filled : styles.outline}`}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
