import styles from "./ThankYouLetter.module.css";

export default function ThankYouLetter() {
  return (
    <section className={styles.section}>
      <div className={`reading ${styles.inner}`}>
        <h2 className={styles.heading}>To everyone who stood with us</h2>
        <p>
          Thank you for every door you knocked, every conversation you started
          with a neighbor, every dollar you gave and every vote you cast. This
          campaign ran on people, and you showed up.
        </p>
        <p>
          We asked for a township government built on transparency, compassion
          and real connection to the community. More of our neighbors heard that
          message than ever before, and the conversation in Westfield has moved
          because of it.
        </p>
        {/* TODO: replace with Jeff's personal line */}
        <p>
          [ADD A PERSONAL LINE: what this campaign meant to you, or a moment
          you&apos;ll remember]
        </p>
        <p className={styles.signoff}>
          With gratitude,
          <br />
          Jeff
        </p>
      </div>
    </section>
  );
}
