import React from "react";

import styles from "./index.module.scss";

export default function Divider() {
  return (
    <div className={styles.Divider}>
      <span className={styles.line} />
      <span className={styles.text}>或</span>
      <span className={styles.line} />
    </div>
  );
}
