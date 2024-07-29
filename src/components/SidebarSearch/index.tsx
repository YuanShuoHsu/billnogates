import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import styles from "./index.module.scss";

export default function SidebarSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOnComposition, setIsOnComposition] = useState(false);

  const handleComposition = (
    event: React.CompositionEvent<HTMLInputElement>
  ) => {
    setIsOnComposition(event.type !== "compositionend");
  };

  const handleSidebarSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isOnComposition || event.key !== "Enter") return;

    const target = event.target as HTMLInputElement;
    const value = target.value.trim();

    if (value !== "") {
      navigate("/find", {
        state: { keyWord: value },
      });
      target.value = "";
      dispatch(hideSidebar());
    }
  };

  return (
    <div className={styles.sidebarSearch}>
      <input
        className={styles.sidebarSearch__input}
        maxLength={25}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onKeyDown={handleSidebarSearch}
        placeholder="搜尋商品"
        type="text"
      />
    </div>
  );
}
