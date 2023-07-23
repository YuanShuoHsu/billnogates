import styles from "./index.module.scss";

export default function Divider() {
  return (
    <div className={styles.divider}>
      <span className={styles.line} />
      <span className={styles.text}>或</span>
      <span className={styles.line} />
    </div>
  );
}
