import CartbarContentItem from "../CartbarContentItem";

import styles from "./index.module.scss";

export default function CartbarContent({ cartbarItem }) {
  return (
    <div className={styles.cartbarContent}>
      {cartbarItem &&
        cartbarItem.map((item) => (
          <CartbarContentItem
            key={`${item.id} ${item.selectedSize} ${item.selectedColor}`}
            cartbarItem={cartbarItem}
            item={item}
          />
        ))}
    </div>
  );
}
