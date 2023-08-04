import navs from "../../dataset/navs";
import HeaderNavItem from "../HeaderNavItem";

import styles from "./index.module.scss";

export default function HeaderNavMenu() {
  return (
    <ul className={styles.headerNavMenu}>
      {navs.map((item) => (
        <HeaderNavItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
