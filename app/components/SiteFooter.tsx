import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>Paid for by Jeff Bledsoe For Trustee</p>
        <p>Info@TheJeffBledsoeHQ.com</p>
      </div>
    </footer>
  );
}
