import { useDispatch } from "react-redux";
import {
  decrementCartbarItem,
  incrementCartbarItem,
} from "../../store/slice/cartbarItem";

import styles from "./index.module.scss";

const minNumber = 1;
const maxNumber = 10;

export default function CartbarContentItemCalculator({ cartbarItem, item }) {
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(decrementCartbarItem({ cartbarItem, item, minNumber }));
  };

  const increment = () => {
    dispatch(incrementCartbarItem({ cartbarItem, item, maxNumber }));
  };

  return (
    <div className={styles.calculator}>
      <button onClick={decrement} className={styles.operator}>
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
        className={styles.number}
        type="number"
        value={item.number}
        readOnly
      />
      <button onClick={increment} className={styles.operator}>
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
  );
}
