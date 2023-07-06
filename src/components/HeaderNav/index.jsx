import NAVS from "../../dataset/navbar";
import HeaderNavItem from "../HeaderNavItem";

import styles from "./index.module.scss";

export default function HeaderNav() {
  return (
    <div className={styles.HeaderNav}>
      <ul className={styles.menu}>
        {NAVS &&
          NAVS.map((item) => <HeaderNavItem item={item} key={item.id} />)}
      </ul>
    </div>
  );
}
