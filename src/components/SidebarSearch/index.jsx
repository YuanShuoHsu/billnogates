import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import styles from "./index.module.scss";

export default function SidebarSearch() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleHideSidebar = () => {
    dispatch(hideSidebar());
    document.body.style.overflow = "auto";
  };

  const [isOnComposition, setIsOnComposition] = useState(false);

  const handleComposition = (event) => {
    const { type } = event;
    if (type === "compositionend") {
      setIsOnComposition(false);
    } else {
      setIsOnComposition(true);
    }
  };

  const handleSidebarSearch = (event) => {
    const { keyCode, target } = event;
    if (!isOnComposition) {
      if (keyCode !== 13) return;
      if (target.value.trim() === "") {
        target.value = "";
        return;
      }

      navigate("/find", { state: { keyWord: target.value } });

      target.value = "";

      handleHideSidebar();
    }
  };

  return (
    <div className={styles.SidebarSearch}>
      <input
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onKeyDown={handleSidebarSearch}
        className={styles.input}
        placeholder="搜尋商品"
        type="text"
        maxLength={25}
      />
    </div>
  );
}
