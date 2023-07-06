import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { hideSearch } from "../../store/slice/search";

import styles from "./index.module.scss";

export default function HeaderSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOnComposition, setIsOnComposition] = useState(false);

  const handleComposition = (
    event: React.CompositionEvent<HTMLInputElement>
  ) => {
    setIsOnComposition(event.type !== "compositionend");
  };

  const handleHeaderSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isOnComposition || event.key !== "Enter") {
      return;
    }

    const target = event.target as HTMLInputElement;
    const value = target.value.trim();

    if (value !== "") {
      navigate("/find", {
        state: { keyWord: value },
      });
      target.value = "";
      dispatch(hideSearch());
    }
  };

  return (
    <div className={styles.headerSearch}>
      <input
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onKeyDown={handleHeaderSearch}
        className={styles.headerSearch__input}
        placeholder="搜尋商品"
        type="text"
        maxLength={25}
      />
    </div>
  );
}
