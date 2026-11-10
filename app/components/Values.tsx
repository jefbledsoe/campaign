import styles from "./Values.module.css";

const values = [
  {
    title: "Transparency",
    body: "Residents deserve to see how their township works and where their money goes.",
  },
  {
    title: "Compassion",
    body: "Township assistance should meet neighbors with dignity when they need it most.",
  },
  {
    title: "Community Connection",
    body: "Local government works best when people know it and take part in it.",
  },
];

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>What we ran on still matters</h2>
        <div className={styles.grid}>
          {values.map((value) => (
            <article key={value.title} className={styles.card}>
              <span className={styles.bar} aria-hidden="true" />
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.body}>{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
