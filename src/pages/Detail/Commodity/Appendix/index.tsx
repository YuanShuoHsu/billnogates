import { Products } from "../../../../typings/products";

import styles from "./index.module.scss";

interface AppendixProps {
  foundProduct: Products;
  activeButton: boolean;
}

export default function Appendix({
  foundProduct,
  activeButton,
}: AppendixProps) {
  const items = activeButton
    ? foundProduct.images.description
    : foundProduct.images.information;

  return (
    <div className={styles.appendix}>
      {items?.map((item) => (
        <div className={styles.appendix__imgBox} key={item.alt}>
          <img className={styles.appendix__image} src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
