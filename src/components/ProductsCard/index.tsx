import { Link } from "react-router-dom";

import { Products } from "../../typings/products";

import styles from "./index.module.scss";

interface ProductsCardProps {
  products: Products;
}

export default function ProductsCard({
  products: { id, name, dimensions, images },
}: ProductsCardProps) {
  const renderPriceRange = (dimensions: {
    [size: string]: number | undefined;
  }) => {
    const validPrices = Object.values(dimensions).filter(
      (price): price is number => typeof price === "number"
    );

    if (validPrices.length === 0) {
      return <p className={styles.productsCard__contentText}>品項尚未定價</p>;
    }

    const maxPrice = Math.max(...validPrices);
    const minPrice = Math.min(...validPrices);

    const isSinglePrice = minPrice === maxPrice;

    return (
      <p className={styles.productsCard__contentText}>
        {isSinglePrice ? `NT$${minPrice}` : `NT$${minPrice}～${maxPrice}`}
      </p>
    );
  };

  return (
    <Link className={styles.link} to={`/detail/${id}`} key={id}>
      <div className={styles.productsCard}>
        <span className={styles.productsCard__ribbon} />
        <div className={styles.productsCard__container}>
          <div className={styles.productsCard__imgBox}>
            <img
              className={styles.productsCard__image}
              src={images.main.src}
              alt={images.main.alt}
            />
          </div>
        </div>
        <div className={styles.productsCard__footer}>
          <div className={styles.productsCard__content}>
            <p className={styles.productsCard__contentText}>{name}</p>
            {renderPriceRange(dimensions)}
          </div>
        </div>
      </div>
    </Link>
  );
}
