import styles from "./index.module.scss";

export default function Appendix(props) {
  const { foundProduct, activeButton } = props;

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
        ? foundProduct.description &&
          foundProduct.description.map((item) => {
            return judgeClassName(item);
          })
        : foundProduct.information &&
          foundProduct.information.map((item) => {
            return judgeClassName(item);
          })}
    </div>
  );
}
