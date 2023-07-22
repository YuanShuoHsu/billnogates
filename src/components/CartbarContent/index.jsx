import CartbarContentItem from "../CartbarContentItem";

import styles from "./index.module.scss";

export default function CartbarContent({ cartbarItem }) {
  return (
    <div className={styles.cartbarContent}>
      {cartbarItem &&
        cartbarItem.map((item) => (
          <CartbarContentItem
            cartbarItem={cartbarItem}
            item={item}
            key={`${item.id} ${item.choose}`}
          />
        ))}
    </div>
  );
}
