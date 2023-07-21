import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import styles from "./index.module.scss";

export default function Product({products}) {
  const pagination = useSelector((state) => state.pagination.value);
  
  const newProducts = products.slice((pagination - 1) * 24, pagination * 24);

  const renderPriceRange = (item) => {
    const prices = item.dimension.map((item) => item.price);

    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);

    if (minPrice === maxPrice) {
      return <p className={styles.text}>NT${minPrice}</p>;
    } else {
      return (
        <p className={styles.text}>
          NT${minPrice}～{maxPrice}
        </p>
      );
    }
  };

  return (
    <div className={styles.Product}>
      {newProducts.map((item) => (
        <Link className={styles.link} to={`/detail/${item.id}`} key={item.id}>
          <button className={styles.card}>
            <span className={styles.ribbon} />
            <div className={styles.box}>
              <img className={styles.image} src={item.image} alt={item.name} />
            </div>
            <div className={styles.foot}>
              <div className={styles.content}>
                <p className={styles.text}>{item.name}</p>
                {renderPriceRange(item)}
              </div>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}
