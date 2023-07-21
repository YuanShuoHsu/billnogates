import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

interface HeaderNavGrandItemProps {
  itemLink: string;
  subItemLink: string;
  grandItem: {
    grandId: number;
    grandLink: string;
    grandNav: string;
  };
}

export default function HeaderNavGrandItem({
  itemLink,
  subItemLink,
  grandItem,
}: HeaderNavGrandItemProps) {
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <li
      onClick={stopPropagation}
      className={styles.headerNavGrandItem}
      key={grandItem.grandId}
    >
      <NavLink
        className={({ isActive }) =>
          `${styles.headerNavGrandItem__grandHref} ${isActive ? styles["headerNavGrandItem__grandHref--active"] : ""}`
        }
        to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}
      >
        <div className={styles.headerNavGrandItem__grandLink}>
          <span className={styles.headerNavGrandItem__grandText}>{grandItem.grandNav}</span>
        </div>
      </NavLink>
    </li>
  );
}
