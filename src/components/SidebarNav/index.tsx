import navs from "../../dataset/nav";
import SidebarNavItem from "../SidebarNavItem";

import styles from "./index.module.scss";

export default function SidebarNav() {
  return (
    <div className={styles.sidebarNav}>
      <ul className={styles.sidebarNav__menu}>
        {navs &&
          navs.map((item) => <SidebarNavItem item={item} key={item.id} />)}
      </ul>
    </div>
  );
}
