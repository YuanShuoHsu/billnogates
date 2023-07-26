import { Link } from "react-router-dom";

import styles from "./index.module.scss";

type Dimension = {
  subId: number;
  size: string;
  price: number;
};

type Color = {
  subId: number;
  name: string;
  rgb: string;
};

type Gallery = {
  subId: number;
  image: string;
  name: string;
};

type Description = {
  subId: number;
  text?: string;
  vertical?: string;
  horizontal?: string;
};

type Information = {
  subId: number;
  text: string;
};

interface ProductsCardProps {
  id: number;
  image: string;
  name: string;
  dimension: Dimension[];
  color: Color[];
  gallery: Gallery[];
  description: Description[];
  information: Information[];
}

export default function ProductsCard({
  id,
  image,
  name,
  dimension,
}: ProductsCardProps) {
  const renderPriceRange = (dimension: ProductsCardProps["dimension"]) => {
    const prices = dimension.map((item) => item.price);

    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);

    if (minPrice === maxPrice) {
      return <p className={styles.productsCard__contentText}>NT${minPrice}</p>;
    } else {
      return (
        <p className={styles.productsCard__contentText}>
          NT${minPrice}～{maxPrice}
        </p>
      );
    }
  };

  return (
    <Link className={styles.link} to={`/detail/${id}`} key={id}>
      <div className={styles.productsCard}>
        <span className={styles.productsCard__ribbon} />
        <div className={styles.productsCard__container}>
          <div className={styles.productsCard__imgBox}>
            <img
              className={styles.productsCard__image}
              src={image}
              alt={name}
            />
          </div>
        </div>
        <div className={styles.productsCard__footer}>
          <div className={styles.productsCard__content}>
            <p className={styles.productsCard__contentText}>{name}</p>
            {renderPriceRange(dimension)}
          </div>
        </div>
      </div>
    </Link>
  );
}
