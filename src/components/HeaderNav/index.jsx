import navs from "../../dataset/nav";
import HeaderNavItem from "../HeaderNavItem";

import styles from "./index.module.scss";

export default function HeaderNav() {
  return (
    <div className={styles.HeaderNav}>
      <ul className={styles.menu}>
        {navs &&
          navs.map((item) => <HeaderNavItem item={item} key={item.id} />)}
      </ul>
    </div>
  );
}
