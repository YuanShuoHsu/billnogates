import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addToCartbarItem } from "../../../../store/slice/cartbarItem";

import { Products } from "../../../../typings/products";

import styles from "./index.module.scss";

interface GalleryOptionsProps {
  foundProduct: Products;
}

export default function GalleryOptions({ foundProduct }: GalleryOptionsProps) {
  const [selectedSize, setSelectedSize] = useState(
    Object.keys(foundProduct.dimensions)[0]
  );
  const [selectedColor, setSelectedColor] = useState(
    Object.keys(foundProduct.colors)[0]
  );
  const [number, setNumber] = useState(1);

  const minNumber = 1;
  const maxNumber = 10;

  const dispatch = useDispatch();
  const cartbarItem = useSelector(
    (state: RootState) => state.cartbarItem.value
  );

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedColor(value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedSize(value);
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
        selectedColor,
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
      <h3 className={styles.title}>
        NT${foundProduct.dimensions[selectedSize]}
      </h3>
      <div className={styles.box}>
        <div className={styles.option}>
          <span className={styles.text}>品項：</span>
          <div className={styles.wrap}>
            {foundProduct.dimensions &&
              Object.entries(foundProduct.dimensions).map(([size]) => (
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
            {foundProduct.colors &&
              Object.entries(foundProduct.colors).map(([color, rgb]) => (
                <div className={styles.radio} key={color}>
                  <input
                    onChange={handleColorChange}
                    className={styles.input}
                    type="radio"
                    name="color"
                    value={color}
                    id={color}
                    checked={color === selectedColor}
                    required
                  />
                  <label
                    style={{ background: rgb }}
                    className={`${styles.label} ${styles.circle}`}
                    htmlFor={color}
                    title={color}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className={styles.count}>
          <span className={styles.text}>數量：</span>
          <div className={styles.number}>
            <button onClick={decrement} className={styles.button}>
              <div className={styles.svgBox}>
                <svg
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </div>
            </button>
            <input
              className={styles.input}
              type="number"
              value={number}
              readOnly
            />
            <button onClick={increment} className={styles.button}>
              <div className={styles.svgBox}>
                <svg
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </div>
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
