import logo from "./../../images/home/品牌logo.svg";

import styles from "./index.module.scss";

export default function HeaderBrand() {
  return (
    <button className={styles.headerBrand}>
      <div className={styles.headerBrand__logo}>
        <img
          className={styles.headerBrand__logoIcon}
          src={logo}
          alt="Billnogates"
        />
      </div>
      <span className={styles.headerBrand__title}>
        <span className={styles.headerBrand__titleBlue}>B</span>
        <span className={styles.headerBrand__titlePink}>ill</span>
        <span className={styles.headerBrand__titleYellow}>no</span>
        <span className={styles.headerBrand__titleBlue}>g</span>
        <span className={styles.headerBrand__titlePink}>ates</span>
      </span>
    </button>
  );
}
