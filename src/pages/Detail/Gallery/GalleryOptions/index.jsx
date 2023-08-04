import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { addToCartbarItem } from "../../../../store/slice/cartbarItem";

import styles from "./index.module.scss";

export default function GalleryOptions(props) {
  const { foundProduct } = props;

  const [selectedSize, setSelectedSize] = useState(Object.keys(foundProduct.dimensions)[0]);
  const [color, setColor] = useState(foundProduct.color[0].name);
  const [number, setNumber] = useState(1);

  const minNumber = 1;
  const maxNumber = 10;

  const dispatch = useDispatch();
  const cartbarItem = useSelector((state) => state.cartbarItem.value);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleColorChange = (event) => {
    const { target } = event;
    setColor(target.value);
  };

  const handleSizeChange = (event) => {
    const { target } = event;
    setSelectedSize(target.value);
  };

  const decrement = () => {
    if (minNumber < number) {
      setNumber(number - 1);
    }
  };

  const increment = () => {
    if (number < maxNumber) {
      setNumber(number + 1);
    }
  };

  const addToCart = () => {
    dispatch(
      addToCartbarItem({
        cartbarItem,
        foundProduct,
        color,
        selectedSize,
        number,
        maxNumber,
      })
    );
  };

  const handleBuyNow = () => {
    addToCart();
    navigate("/checkout");
  };

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.GalleryOptions}>
      <h2 className={styles.title}>{foundProduct.name}</h2>
      <h3 className={styles.title}>NT${foundProduct.dimensions[selectedSize]}</h3>
      <div className={styles.box}>
        <div className={styles.option}>
          <span className={styles.text}>品項：</span>
          <div className={styles.wrap}>
            {foundProduct.dimensions &&
              Object.entries(foundProduct.dimensions).map(([size, _]) => (
                <div className={styles.radio} key={size}>
                  <input
                    onChange={handleSizeChange}
                    className={styles.input}
                    type="radio"
                    name="size"
                    value={size}
                    id={size}
                    checked={size === selectedSize}
                    required
                  />
                  <label
                    className={`${styles.label} ${styles.round}`}
                    htmlFor={size}
                  >
                    {size}
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.option}>
          <span className={styles.text}>顏色：</span>
          <div className={styles.wrap}>
            {foundProduct.color &&
              foundProduct.color.map((item) => (
                <div className={styles.radio} key={item.subId}>
                  <input
                    onChange={handleColorChange}
                    className={styles.input}
                    type="radio"
                    name="color"
                    value={item.name}
                    id={item.name}
                    checked={color === item.name}
                    required
                  />
                  <label
                    style={{ background: item.rgb }}
                    className={`${styles.label} ${styles.circle}`}
                    htmlFor={item.name}
                    title={item.name}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className={styles.count}>
          <span className={styles.text}>數量：</span>
          <div className={styles.number}>
            <button onClick={decrement} className={styles.button}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
            <input
              className={styles.input}
              type="number"
              value={number}
              readOnly
            />
            <button onClick={increment} className={styles.button}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.buyGroup}>
          <button onClick={handleBuyNow} className={styles.button}>
            立即購買
          </button>
          <button onClick={handleAddToCart} className={styles.button}>
            加入購物車
          </button>
        </div>
      </div>
    </form>
  );
}
