import React, { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";
import { RootState } from "../../store";

import SidebarSearch from "../SidebarSearch";
import SidebarNav from "../SidebarNav";
import brainImage from "../../images/sidebar/腦袋本人.svg";

import styles from "./index.module.scss";

export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: RootState) => state.sidebar.value);

  const handleHideSidebar = useCallback(() => {
    dispatch(hideSidebar());
  }, [dispatch]);

  useEffect(() => {
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        handleHideSidebar();
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [handleHideSidebar]);

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleHideSidebar}
      className={`${styles.sidebar} ${
        sidebar ? styles["sidebar--active"] : ""
      }`}
    >
      <div onClick={stopPropagation} className={styles.sidebar__box}>
        <div className={styles.sidebar__landscape}>
          <img
            className={styles.sidebar__image}
            src={brainImage}
            alt="腦袋本人"
          />
        </div>
        <SidebarSearch />
        <SidebarNav />
      </div>
    </div>
  );
}
