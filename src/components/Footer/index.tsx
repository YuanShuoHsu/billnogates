import styles from "./index.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>Copyright © 2023 Yuan Shuo Hsu.</p>
      <p className={styles.footer__text}>All rights reserved.</p>
    </div>
  );
}
