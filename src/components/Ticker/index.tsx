import { useState } from "react";
import styles from "./index.module.scss";

export default function Ticker() {
  const [animationPlayState, setAnimationPlayState] = useState("running");
  const [animationDirection, setAnimationDirection] = useState("normal");

  const handleReverse = () => {
    setAnimationPlayState((prevState) =>
      prevState === "running" ? "paused" : "running"
    );
  };

  const handleStop = () => {
    setAnimationDirection((prevDirection) =>
      prevDirection === "normal" ? "reverse" : "normal"
    );
  };

  const tickerStyle = {
    animationPlayState,
    animationDirection,
  };

  return (
    <div
      onDoubleClick={handleStop}
      onClick={handleReverse}
      className={styles.ticker}
    >
      <div className={styles.ticker__content} style={tickerStyle}>
        <span>billnogates</span>
        <span className={styles.ticker__contentStroke}> store </span>
        <span className={styles.ticker__contentHue}> - store - </span>
        <span>billnogates</span>
        <span className={styles.ticker__contentStroke}> store - </span>
        <span className={styles.ticker__contentHue}> store - </span>
        <span>billnogates</span>
        <span className={styles.ticker__contentStroke}> store - </span>
        <span className={styles.ticker__contentHue}> store - </span>
        <span>billnogates</span>
        <span className={styles.ticker__contentStroke}> store </span>
        <span className={styles.ticker__contentHue}> - store - </span>
        <span>billnogates</span>
        <span className={styles.ticker__contentStroke}> store </span>
        <span className={styles.ticker__contentHue}> - store - </span>
      </div>
    </div>
  );
}
