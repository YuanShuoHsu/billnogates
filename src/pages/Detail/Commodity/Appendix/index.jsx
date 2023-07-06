import React from "react";

import styles from "./index.module.scss";

export default function Appendix(props) {
  const { findResult, activeButton } = props;

  const judgeClassName = (item) => {
    if (item.text !== undefined) {
      return (
        <p className={styles.text} key={item.subId}>
          {item.text}
        </p>
      );
    } else if (item.horizontal !== undefined) {
      return (
        <img
          className={`${styles.image} ${styles.horizontal}`}
          key={item.subId}
          src={item.horizontal}
          alt={item.name}
          loading="lazy"
        />
      );
    } else if (item.vertical !== undefined) {
      return (
        <img
          className={`${styles.image} ${styles.vertical}`}
          key={item.subId}
          src={item.vertical}
          alt={item.name}
          loading="lazy"
        />
      );
    }
  };

  return (
    <div className={styles.Appendix}>
      {activeButton
        ? findResult.description &&
          findResult.description.map((item) => {
            return judgeClassName(item);
          })
        : findResult.information &&
          findResult.information.map((item) => {
            return judgeClassName(item);
          })}
    </div>
  );
}
