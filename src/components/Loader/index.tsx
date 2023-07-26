import styles from "./index.module.scss";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
    </div>
  );
}
