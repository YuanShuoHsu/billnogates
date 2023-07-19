import navs from "../../dataset/nav";
import SidebarNavItem from "../SidebarNavItem";

import styles from "./index.module.scss";

export default function SidebarNavMenu() {
  return (
    <ul className={styles.sidebarNavMenu}>
      {navs.map((item) => (
        <SidebarNavItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
