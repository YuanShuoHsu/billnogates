import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeArrangement } from "../../store/slice/arrangement";

import styles from "./index.module.scss";

export default function Arrangement() {
  const dispatch = useDispatch();
  const arrangement = useSelector((state) => state.arrangement.value);

  useEffect(() => {
    dispatch(changeArrangement("recommend"));
  }, [dispatch]);

  const handleSelectChange = (event) => {
    const { target } = event;
    dispatch(changeArrangement(target.value));
  };

  return (
    <div className={styles.Arrangement} id="Arrangement">
      <div className="anchorPoint" />
      <div className={styles.box}>
        <span className={styles.text}>排列方式：</span>
        <div className={styles.content}>
          <select
            value={arrangement}
            onChange={handleSelectChange}
            className={styles.select}
            name="arrangement"
          >
            <option value="recommend">推薦</option>
            <option value="priceLow">價錢，從低到高</option>
            <option value="priceHigh">價錢，從高到低</option>
          </select>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
