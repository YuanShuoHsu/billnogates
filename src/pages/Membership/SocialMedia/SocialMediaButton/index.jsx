import { Fragment } from "react";
import Loader from "../../../../components/Loader";

import styles from "./index.module.scss";

export default function SocialMedia({
  provider,
  text,
  isLoading,
  onClick,
  imageSrc,
}) {
  return (
    <button
      onClick={(event) => onClick(event, provider)}
      className={styles.button}
    >
      {!isLoading ? (
        <Fragment>
          <div className={styles.imgBox}>
            <img
              className={styles.image}
              src={imageSrc}
              alt={provider}
            />
          </div>
          <div className={styles.textBox}>
            <span className={styles.text}>使用</span>
            <span className={styles.brandText}>{provider}</span>
            <span className={styles.text}>帳號{text}</span>
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </button>
  );
}
