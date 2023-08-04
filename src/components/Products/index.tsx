import { useSelector } from "react-redux";
import { RootState } from "../../store";

import ProductsCard from "../ProductsCard";

import styles from "./index.module.scss";

interface ProductsItem {
  id: number;
  image: string;
  name: string;
  dimensions: {
    [size: string]: number;
  };
  color: {
    subId: number;
    name: string;
    rgb: string;
  }[];
  gallery: {
    subId: number;
    image: string;
    name: string;
  }[];
  description: {
    subId: number;
    text?: string;
    vertical?: string;
    horizontal?: string;
  }[];
  information: {
    subId: number;
    text: string;
  }[];
}

interface ProductsProps {
  products: ProductsItem[];
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
          id={item.id}
          image={item.image}
          name={item.name}
          dimensions={item.dimensions}
          color={item.color}
          gallery={item.gallery}
          description={item.description}
          information={item.information}
        />
      ))}
    </div>
  );
}
