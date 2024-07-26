import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import {
  initialProducts,
  sortedByAscendingPrice,
  sortedByDescendingPrice,
} from "../../store/slice/products";
import {
  changeArrangement,
  initialAnchorPoint,
} from "../../store/slice/arrangement";

import { ReactComponent as AngleDown } from "./../../images/others/angle-down.svg";

import styles from "./index.module.scss";

const sortOptions = {
  recommend: "推薦",
  priceLow: "價錢，從低到高",
  priceHigh: "價錢，從高到低",
};

export default function Arrangement() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const arrangement = useSelector(
    (state: RootState) => state.arrangement.value
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialAnchorPoint(anchorRef.current));
  }, [dispatch]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    switch (value) {
      case "recommend":
        dispatch(initialProducts());
        break;
      case "priceLow":
        dispatch(sortedByAscendingPrice());
        break;
      case "priceHigh":
        dispatch(sortedByDescendingPrice());
        break;
      default:
        break;
    }
    dispatch(changeArrangement(value));
  };

  return (
    <div className={styles.arrangement}>
      <div className={styles.arrangement__anchorPoint} ref={anchorRef} />
      <div className={styles.arrangement__box}>
        <span className={styles.arrangement__text}>排列方式：</span>
        <div className={styles.arrangement__content}>
          <select
            value={arrangement}
            onChange={handleSelectChange}
            className={styles.arrangement__select}
            name="arrangement"
          >
            {Object.entries(sortOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <div className={styles.arrangement__svgBox}>
            <AngleDown className={styles.arrangement__svg} />
          </div>
        </div>
      </div>
    </div>
  );
}
