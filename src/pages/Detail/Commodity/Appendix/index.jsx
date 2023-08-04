import styles from "./index.module.scss";

export default function Appendix({ foundProduct, activeButton }) {
  const items = activeButton
    ? foundProduct.images.description
    : foundProduct.images.information;

  return (
    <div className={styles.appendix}>
      {items &&
        items.map((item) => (
          <div className={styles.imgBox} key={item.name}>
            <img className={styles.image} src={item.image} alt={item.name} />
          </div>
        ))}
    </div>
  );
}
