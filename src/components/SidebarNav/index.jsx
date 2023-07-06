import React from "react";

import NAVS from "../../dataset/navbar";
import SidebarNavItem from "../SidebarNavItem";

import styles from "./index.module.scss";

export default function SidebarNav() {
  return (
    <div className={styles.SidebarNav}>
      <ul className={styles.menu}>
        {NAVS &&
          NAVS.map((item) => <SidebarNavItem item={item} key={item.id} />)}
      </ul>
    </div>
  );
}
