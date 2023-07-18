import React, { useState, Fragment } from "react";

import SidebarNavGrandItem from "../SidebarNavGrandItem";

import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

interface SidebarNavSubItemProps {
  handleSubItemLayersLength: (propsClick: number) => void;
  itemLink: string;
  subItem: {
    subId: number;
    subLink: string;
    subNav: string;
    subLayers?: Array<{
      grandId: number;
      grandLink: string;
      grandNav: string;
    }>;
  };
}

export default function SidebarNavSubItem({
  handleSubItemLayersLength,
  itemLink,
  subItem,
}: SidebarNavSubItemProps) {
  const dispatch = useDispatch();

  const [subItemClick, setSubItemClick] = useState<boolean>(false);

  const handleHideSidebar = () => {
    dispatch(hideSidebar());
  };

  const handleClick = (event: React.MouseEvent, subItemClick: boolean) => {
    event.stopPropagation();
    setSubItemClick(subItemClick);

    if (subItemClick) {
      handleSubItemLayersLength(subItem.subLayers?.length || 0);
    } else {
      handleSubItemLayersLength(-(subItem.subLayers?.length || 0));
    }
  };

  const GrandMenuStyle = {
    "--x": subItem.subLayers?.length,
  } as React.CSSProperties;

  return (
    <Fragment>
      {subItem.subLayers === undefined ? (
        <li
          onClick={handleHideSidebar}
          className={styles.sidebarNavSubItem}
          key={subItem.subId}
        >
          <NavLink
            className={({ isActive }) =>
              `${styles.subHref} ${isActive ? styles.active : ""}`
            }
            to={`/${itemLink}/${subItem.subLink}`}
          >
            <div className={styles.subLink}>
              <span className={styles.subText}>{subItem.subNav}</span>
            </div>
          </NavLink>
        </li>
      ) : (
        <li
          onClick={(event) => handleClick(event, !subItemClick)}
          className={`${styles.sidebarNavSubItem} ${
            subItemClick ? styles.active : ""
          }`}
          key={subItem.subId}
        >
          <div className={`${styles.subLink} ${styles.active}`}>
            <span className={styles.subText}>{subItem.subNav}</span>
            <div className={styles.svgBox}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </div>
          <ul style={GrandMenuStyle} className={styles.sidebarNavSubItem__grandMenu}>
            {subItem.subLayers.map((grandItem) => (
              <SidebarNavGrandItem
                itemLink={itemLink}
                subItemLink={subItem.subLink}
                grandItem={grandItem}
                key={grandItem.grandId}
              />
            ))}
          </ul>
        </li>
      )}
    </Fragment>
  );
}
