import React from "react";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

interface SidebarNavGrandItemProps {
  itemLink: string;
  subItemLink: string;
  grandItem: {
    grandId: number;
    grandLink: string;
    grandNav: string;
  };
}

export default function SidebarNavGrandItem({
  itemLink,
  subItemLink,
  grandItem,
}: SidebarNavGrandItemProps) {
  const dispatch = useDispatch();

  const handleHideSidebar = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    dispatch(hideSidebar());
  };

  return (
    <li
      onClick={handleHideSidebar}
      className={styles.sidebarNavGrandItem}
      key={grandItem.grandId}
    >
      <NavLink
        className={({ isActive }) =>
          `${styles.sidebarNavGrandItem__grandHref} ${
            isActive ? styles["sidebarNavGrandItem__grandHref--active"] : ""
          }`
        }
        to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}
      >
        <div className={styles.sidebarNavGrandItem__grandLink}>
          <span className={styles.sidebarNavGrandItem__grandText}>{grandItem.grandNav}</span>
        </div>
      </NavLink>
    </li>
  );
}
