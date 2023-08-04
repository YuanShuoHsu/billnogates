import { useState } from "react";

import Appendix from "./Appendix";

import styles from "./index.module.scss";

export default function Commodity({ foundProduct }) {
  const [activeButton, setActiveButton] = useState(true);

  const handleActiveButton = (boolean) => {
    setActiveButton(boolean);
  };

  return (
    <div className={styles.commodity}>
      <div className={styles.commodity__buttonGroup}>
        <button
          onClick={() => handleActiveButton(true)}
          className={`${styles.commodity__button} ${activeButton ? styles.active : ""}`}
        >
          商品描述
        </button>
        <button
          onClick={() => handleActiveButton(false)}
          className={`${styles.commodity__button} ${activeButton ? "" : styles.active}`}
        >
          商品資訊
        </button>
      </div>
      <Appendix foundProduct={foundProduct} activeButton={activeButton} />
    </div>
  );
}
