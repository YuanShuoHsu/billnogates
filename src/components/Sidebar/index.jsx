import { useEffect, useCallback } from "react";

import SidebarSearch from "../SidebarSearch";
import SidebarNav from "../SidebarNav";

import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import styles from "./index.module.scss";

export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar.value);

  const handleHideSidebar = useCallback(() => {
    dispatch(hideSidebar());
  }, [dispatch]);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (event) => {
        if (!event.matches) {
          handleHideSidebar();
        }
      });
  }, [handleHideSidebar]);

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleHideSidebar}
      className={`${styles.Sidebar} ${sidebar ? `${styles.active}` : ""}`}
    >
      <div onClick={stopPropagation} className={styles.box}>
        <div className={styles.landscape}>
          <img
            src={require("../../images/sidebar/腦袋本人.svg").default}
            alt="腦袋本人"
          />
        </div>
        <SidebarSearch />
        <SidebarNav />
      </div>
    </div>
  );
}
