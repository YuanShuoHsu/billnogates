import { useState, Fragment } from "react";

import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import SidebarNavSubItem from "../SidebarNavSubItem";

import styles from "./index.module.scss";

interface SidebarNavItemProps {
  item: {
    id: number;
    link: string;
    nav: string;
    layers?: Array<{
      subId: number;
      subLink: string;
      subNav: string;
      subLayers?: Array<{
        grandId: number;
        grandLink: string;
        grandNav: string;
      }>;
    }>;
  };
}

export default function SidebarNavItem({ item }: SidebarNavItemProps) {
  const dispatch = useDispatch();

  const [itemClick, setItemClick] = useState<boolean>(false);
  const [subItemClick, setSubItemClick] = useState<number>(0);

  const handleHideSidebar = () => {
    dispatch(hideSidebar());
  };

  const handleClick = () => {
    setItemClick(!itemClick);
  };

  const handleSubItemLayersLength = (propsClick: number) => {
    setSubItemClick((prevSubItemClick) => prevSubItemClick + propsClick);
  };

  const subMenuStyle = {
    "--x": item.layers?.length ? item.layers.length + subItemClick : 0,
  } as React.CSSProperties;

  return (
    <Fragment>
      {item.layers === undefined ? (
        <li
          onClick={handleHideSidebar}
          className={styles.sidebarNavItem}
          key={item.id}
        >
          <NavLink
            className={({ isActive }) =>
              `${styles.sidebarNavItem__href} ${isActive ? styles["sidebarNavItem__href--active"] : ""}`
            }
            to={`/${item.link}`}
          >
            <div className={styles.sidebarNavItem__link}>
              <span className={styles.sidebarNavItem__text}>{item.nav}</span>
            </div>
          </NavLink>
        </li>
      ) : (
        <li
          onClick={handleClick}
          className={`${styles.sidebarNavItem} ${
            itemClick ? styles["sidebarNavItem--active"] : ""
          }`}
          key={item.id}
        >
          <div className={`${styles.sidebarNavItem__link} ${styles["sidebarNavItem__link--active"]}`}>
            <span className={styles.sidebarNavItem__text}>{item.nav}</span>
            <div className={styles.sidebarNavItem__svgBox}>
              <svg
                className={styles.sidebarNavItem__svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </div>
          <ul style={subMenuStyle} className={styles.sidebarNavItem__subMenu}>
            {item.layers.map((subItem) => (
              <SidebarNavSubItem
                handleSubItemLayersLength={handleSubItemLayersLength}
                itemLink={item.link}
                subItem={subItem}
                key={subItem.subId}
              />
            ))}
          </ul>
        </li>
      )}
    </Fragment>
  );
}
