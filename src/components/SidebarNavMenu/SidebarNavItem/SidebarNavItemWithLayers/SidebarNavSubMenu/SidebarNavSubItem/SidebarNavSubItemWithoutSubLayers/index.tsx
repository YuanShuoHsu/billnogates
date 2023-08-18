import { useDispatch } from "react-redux";
import { hideSidebar } from "../../../../../../../store/slice/sidebar";

import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

interface SidebarNavSubItemWithoutSubLayersProps {
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

export default function SidebarNavSubItemWithoutSubLayers({
  itemLink,
  subItem,
}: SidebarNavSubItemWithoutSubLayersProps) {
  const dispatch = useDispatch();

  const handleHideSidebar = () => {
    dispatch(hideSidebar());
  };

  return (
    <li
      onClick={handleHideSidebar}
      className={styles.sidebarNavSubItemWithoutSubLayers}
      key={subItem.subId}
    >
      <NavLink
        className={({ isActive }) =>
          `${styles.sidebarNavSubItemWithoutSubLayers__subHref} ${
            isActive ? styles["sidebarNavSubItemWithoutSubLayers__subHref--active"] : ""
          }`
        }
        to={`/${itemLink}/${subItem.subLink}`}
      >
        <div className={styles.sidebarNavSubItemWithoutSubLayers__subLink}>
          <span className={styles.sidebarNavSubItemWithoutSubLayers__subText}>
            {subItem.subNav}
          </span>
        </div>
      </NavLink>
    </li>
  );
}
