import styles from "./ThankYouLetter.module.css";

export default function ThankYouLetter() {
  return (
    <section className={styles.section}>
      <div className={`reading ${styles.inner}`}>
        <h2 className={styles.heading}>To everyone who stood with us</h2>
        <p>Thank you to everybody who supported me through this campaign.</p>
        <p>
          This is not the result we wanted, but I believe it has been a positive
          experience. I am moved by the new connections and experiences this race
          has given me, and I am elated that it was part of, and contributed to,
          even in a small way, the outstanding results of this election. What I
          am most proud of is that this race showed that the Township, and
          Westfield within it, is in play for progressive candidates.
        </p>
        <p>
          Thank you to all of the residents who took the time to have a real
          conversation with me on the campaign trail. Thank you to the Hamilton
          County and Westfield Democrats for all of your support. Thank you to
          the other candidates who helped me along the way. Finally, and most
          importantly, thank you to my friends and family for supporting me,
          believing in me and pushing me forward.
        </p>
        <p>
          I look forward to staying engaged and involved, and to helping our
          community in whatever way I can.
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
