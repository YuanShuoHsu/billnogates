import { useState, useEffect, useRef } from "react";
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
} as const;

type SortOptionKey = keyof typeof sortOptions;

export default function Arrangement() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const arrangement = useSelector(
    (state: RootState) => state.arrangement.value
  );

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialAnchorPoint(anchorRef.current));
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectRef]);

  const handleOptionClick = (value: SortOptionKey) => {
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

    setIsSelectOpen(false);
  };

  const handleSelectClick = () => setIsSelectOpen((prev) => !prev);

  return (
    <div className={styles.arrangement}>
      <div className={styles.arrangement__anchorPoint} ref={anchorRef} />
      <div className={styles.arrangement__box}>
        <span className={styles.arrangement__text}>排列方式：</span>
        <div className={styles.arrangement__content} ref={selectRef}>
          <button
            className={styles.arrangement__select}
            onClick={handleSelectClick}
          >
            {sortOptions[arrangement as SortOptionKey]}
            <AngleDown
              className={`${styles.arrangement__angleDown} ${isSelectOpen ? styles.open : ""}`}
            />
          </button>
          <ul className={`${styles.arrangement__options} ${isSelectOpen ? styles.open : ""}`}>
            {Object.entries(sortOptions)
              .filter(([value]) => value !== arrangement)
              .map(([value, label]) => (
                <li
                  className={styles.arrangement__option}
                  key={value}
                  onClick={() => handleOptionClick(value as SortOptionKey)}
                >
                  {label}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
