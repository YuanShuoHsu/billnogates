import React, { useState } from "react";

import Appendix from "./Appendix";

import styles from "./index.module.scss";

export default function Commodity(props) {
  const [activeButton, setActiveButton] = useState(true);

  const { findResult } = props;

  const handleActiveButton = (boolean) => {
    setActiveButton(boolean);
  };

  return (
    <div className={styles.Commodity}>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => handleActiveButton(true)}
          className={`${styles.button} ${activeButton ? styles.active : ""}`}
        >
          商品描述
        </button>
        <button
          onClick={() => handleActiveButton(false)}
          className={`${styles.button} ${activeButton ? "" : styles.active}`}
        >
          商品資訊
        </button>
      </div>
      <Appendix findResult={findResult} activeButton={activeButton} />
    </div>
  );
}
