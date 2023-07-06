import { useDispatch } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";

import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

export default function SidebarNavGrandItem(props) {
  const { itemLink, subItemLink, grandItem } = props;

  const dispatch = useDispatch();

  const handleHideSidebar = (event) => {
    event.stopPropagation();
    dispatch(hideSidebar());
    document.body.style.overflow = "auto";
  };

  return (
    <li
      onClick={handleHideSidebar}
      className={styles.SidebarNavGrandItem}
      key={grandItem.grandId}
    >
      <NavLink
        className={({ isActive }) =>
          `${styles.grandHref}` + (isActive ? ` ${styles.active}` : "")
        }
        to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}
      >
        <div className={styles.grandLink}>
          <span className={styles.grandText}>{grandItem.grandNav}</span>
        </div>
      </NavLink>
    </li>
  );
}
