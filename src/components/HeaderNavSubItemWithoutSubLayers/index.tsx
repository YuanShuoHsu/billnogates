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
    <li className={styles.headerNavSubItem}>
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
  );
}
