import styles from "./index.module.scss";

export default function Divider() {
  return (
    <div className={styles.divider}>
      <span className={styles.divider__line} />
      <span className={styles.divider__text}>或</span>
      <span className={styles.divider__line} />
    </div>
  );
}
