import styles from "./index.module.scss";

export default function CartbarTotal({ cartbarItem }) {
  const totalAmount = () => {
    return cartbarItem.reduce((sum, item) => sum + item.number * item.price, 0);
  };

  return (
    <div className={styles.cartbarTotal}>
      <span className={styles.cartbarTotal__text}>
        合計：NT$
        {totalAmount()}
      </span>
    </div>
  );
}
