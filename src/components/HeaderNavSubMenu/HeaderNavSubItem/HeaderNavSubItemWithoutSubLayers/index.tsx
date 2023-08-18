import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

interface HeaderNavSubItemWithoutSubLayersProps {
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

export default function HeaderNavSubItemWithoutSubLayers({
  itemLink,
  subItem,
}: HeaderNavSubItemWithoutSubLayersProps) {
  return (
    <li className={styles.headerNavSubItemWithoutSubLayers}>
      <NavLink
        className={({ isActive }) =>
          `${styles.headerNavSubItemWithoutSubLayers__subHref} ${isActive ? styles["headerNavSubItemWithoutSubLayers__subHref--active"] : ""}`
        }
        to={`/${itemLink}/${subItem.subLink}`}
      >
        <div className={styles.headerNavSubItemWithoutSubLayers__subLink}>
          <span className={styles.headerNavSubItemWithoutSubLayers__subText}>{subItem.subNav}</span>
        </div>
      </NavLink>
    </li>
  );
}
