import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import styles from "./index.module.scss";

interface SidebarNavItemWithoutLayersProps {
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

export default function SidebarNavItemWithoutLayers({
  item,
}: SidebarNavItemWithoutLayersProps) {
  const dispatch = useDispatch();

  const handleHideSidebar = () => {
    dispatch(hideSidebar());
  };

  return (
    <li
      onClick={handleHideSidebar}
      className={styles.sidebarNavItemWithoutLayers}
      key={item.id}
    >
      <NavLink
        className={({ isActive }) =>
          `${styles.sidebarNavItemWithoutLayers__href} ${
            isActive ? styles["sidebarNavItemWithoutLayers__href--active"] : ""
          }`
        }
        to={`/${item.link}`}
      >
        <div className={styles.sidebarNavItemWithoutLayers__link}>
          <span className={styles.sidebarNavItemWithoutLayers__text}>{item.nav}</span>
        </div>
      </NavLink>
    </li>
  );
}
