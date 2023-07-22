import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { hideCartbar } from "../../store/slice/cartbar";
import { RootState } from "../../store";

import CartbarContent from "../CartbarContent";
import CartbarTotal from "../CartbarTotal";
import CartbarCheckout from "../CartbarCheckout";

import styles from "./index.module.scss";

export default function Cartbar() {
  const dispatch = useDispatch();
  const cartbar = useSelector((state: RootState) => state.cartbar.value);
  const cartbarItem = useSelector(
    (state: RootState) => state.cartbarItem.value
  );

  const handleHideCartbar = () => {
    dispatch(hideCartbar());
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleHideCartbar}
      className={`${styles.cartbar} ${
        cartbar ? styles["cartbar--active"] : ""
      }`}
    >
      <div onClick={stopPropagation} className={styles.cartbar__box}>
        <h2 className={styles.cartbar__title}>您的購物車</h2>
        {cartbarItem.length === 0 ? (
          <p className={styles.cartbar__emptyText}>目前還是空的</p>
        ) : (
          <Fragment>
            <CartbarContent cartbarItem={cartbarItem} />
            <CartbarTotal cartbarItem={cartbarItem} />
            <CartbarCheckout />
          </Fragment>
        )}
      </div>
    </div>
  );
}
