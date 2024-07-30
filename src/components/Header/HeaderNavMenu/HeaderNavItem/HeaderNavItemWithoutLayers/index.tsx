import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

interface HeaderNavItemWithoutLayersProps {
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

export default function HeaderNavItemWithoutLayers({
  item,
}: HeaderNavItemWithoutLayersProps) {
  return (
    <li className={styles.headerNavItemWithoutLayers} key={item.id}>
      <NavLink
        className={({ isActive }) =>
          `${styles.headerNavItemWithoutLayers__href} ${isActive ? styles["headerNavItemWithoutLayers__href--active"] : ""}`
        }
        to={`/${item.link}`}
      >
        <div className={styles.headerNavItemWithoutLayers__link}>
          <span className={styles.headerNavItemWithoutLayers__text}>{item.nav}</span>
        </div>
      </NavLink>
    </li>
  );
}
