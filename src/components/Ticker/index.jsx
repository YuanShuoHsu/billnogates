import React from 'react'

import styles from "./index.module.scss"

export default function Recommend(props) {

  const { id } = props

  const handleReverse = (event) => {
    const content = event.target.children[0];
    const cssObj = window.getComputedStyle(content, null) || document.defaultView.getComputedStyle(content, null);
    const animationPlayState = cssObj.animationPlayState;
    if (animationPlayState === "running") {
      content.style.animationPlayState = "paused"
    }
    else if (animationPlayState === "paused") {
      content.style.animationPlayState = "running"
    }
  }
  const handleStop = (event) => {
    const content = event.target.children[0];
    const cssObj = window.getComputedStyle(content, null) || document.defaultView.getComputedStyle(content, null);
    const animationDirection = cssObj.animationDirection;
    if (animationDirection === "normal") {
      content.style.animationDirection = "reverse";
    }
    else if (animationDirection === "reverse") {
      content.style.animationDirection = "normal"
    }
  }

  return (
    <div onDoubleClick={handleStop} onClick={handleReverse} className={styles.Ticker} id={id}>
      <div className={styles.content}>
        <span>billnogates</span>
        <span className={styles.stroke}> store </span>
        <span className={styles.hue}> - store - </span>
        <span>billnogates</span>
        <span className={styles.stroke}> store - </span>
        <span className={styles.hue}> store - </span>
        <span>billnogates</span>
        <span className={styles.stroke}> store - </span>
        <span className={styles.hue}> store - </span>
        <span>billnogates</span>
        <span className={styles.stroke}> store </span>
        <span className={styles.hue}>  - store - </span>
        <span>billnogates</span>
        <span className={styles.stroke}> store </span>
        <span className={styles.hue}>  - store - </span>
      </div>
    </div>
  )
}
