import { useSelector } from "react-redux";
import { RootState } from "../../store";

import ProductsCard from "../ProductsCard";

import styles from "./index.module.scss";

interface ProductsItem {
  id: number;
  name: string;
  dimensions: {
    [size: string]: number;
  };
  colors: {
    [rgb: string]: string;
  };
  images: {
    main: string;
    gallery: {
      image: string;
      name: string;
    }[];
    description: {
      image: string;
      name: string;
    }[];
    information: {
      image: string;
      name: string;
    }[];
  };
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
          image={item.images.main}
          name={item.name}
          dimensions={item.dimensions}
          colors={item.colors}
          gallery={item.images.gallery}
          description={item.images.description}
          information={item.images.information}
        />
      ))}
    </div>
  );
}
