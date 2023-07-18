import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";
import styles from "./index.module.scss";

export default function SidebarSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOnComposition, setIsOnComposition] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleHideSidebar = () => {
    dispatch(hideSidebar());
  };

  const handleComposition = (
    event: React.CompositionEvent<HTMLInputElement>
  ): void => {
    const { type } = event;
    setIsOnComposition(type === "compositionend");
  };

  const handleSidebarSearch = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const { key } = event;
    if (isOnComposition && key === "Enter") {
      if (searchValue.trim() === "") return;

      navigate("/find", { state: { keyWord: searchValue } });
      setSearchValue("");
      handleHideSidebar();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.sidebarSearch}>
      <input
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onKeyDown={handleSidebarSearch}
        className={styles.sidebarSearch__input}
        placeholder="搜尋商品"
        type="text"
        maxLength={25}
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}
