import { Link } from "react-router-dom";

import HeaderBrand from "./HeaderBrand";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderButtonGroup from "./HeaderButtonGroup";

import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.header__link} to="/">
        <HeaderBrand />
      </Link>
      <nav className={styles.header__content}>
        <HeaderNavMenu />
        <HeaderButtonGroup />
      </nav>
    </header>
  );
}
