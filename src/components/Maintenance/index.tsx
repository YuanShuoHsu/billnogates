import styles from "./index.module.scss";

export default function Maintenance() {
  return (
    <div className={styles.maintenance}>
      <h2 className={styles.maintenance__title}>維護中</h2>
      <ul className={styles.maintenance__dotList}>
        <li className={styles.maintenance__dot}></li>
        <li className={styles.maintenance__dot}></li>
        <li className={styles.maintenance__dot}></li>
        <li className={styles.maintenance__dot}></li>
        <li className={styles.maintenance__dot}></li>
      </ul>
    </div>
  );
}
