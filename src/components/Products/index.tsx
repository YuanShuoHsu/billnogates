import { useSelector } from "react-redux";
import { RootState } from "../../store";

import ProductsCard from "../ProductsCard";

import {Products} from "../../typings/products";

import styles from "./index.module.scss";

interface ProductsProps {
  products: Products[];
}

export default function Product({ products }: ProductsProps) {
  const pagination = useSelector((state: RootState) => state.pagination.value);

  const startIndex = (pagination - 1) * 24;
  const endIndex = pagination * 24;
  const newProducts = products.slice(startIndex, endIndex);

  return (
    <div className={styles.product}>
      {newProducts.map((item) => (
        <ProductsCard
          key={item.id}
          products={item}
        />
      ))}
    </div>
  );
}
