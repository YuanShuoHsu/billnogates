import { Link } from "react-router-dom";

import HeaderBrand from "../HeaderBrand";
import HeaderNav from "../HeaderNav";
import HeaderButton from "../HeaderButton";
import HeaderNavSubMenu from "../HeaderNavSubMenu";
import HeaderSearch from "../HeaderSearch";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  showHeaderNavSubMenu,
  hideHeaderNavSubMenu,
} from "../../store/slice/headerNavSubMenu";
import { showSearch, hideSearch } from "../../store/slice/search";

import styles from "./index.module.scss";

export default function Header() {
  const dispatch = useDispatch();
  const headerNavSubMenu = useSelector(
    (state: RootState) => state.headerNavSubMenu.value
  );
  const search = useSelector((state: RootState) => state.search.value);

  const handleMenuEnterHover = () => {
    dispatch(showHeaderNavSubMenu());
  };

  const handleMenuLeaveHover = () => {
    dispatch(hideHeaderNavSubMenu());
  };

  const handleSearchEnterHover = () => {
    dispatch(showSearch());
  };

  const handleSearchLeaveHover = () => {
    dispatch(hideSearch());
  };

  return (
    <div className={styles.Header}>
      <div className={styles.box}>
        <Link className={styles.link} to="/">
          <HeaderBrand />
        </Link>
        <div className={styles.content}>
          <HeaderNav />
          <HeaderButton />
        </div>
      </div>
      <div
        onMouseEnter={handleMenuEnterHover}
        onMouseLeave={handleMenuLeaveHover}
        className={`${styles.dropdown} ${
          headerNavSubMenu ? `${styles.active}` : ""
        }`}
      >
        <div className={styles.space}></div>
        <HeaderNavSubMenu />
      </div>
      <div
        onMouseEnter={handleSearchEnterHover}
        onMouseLeave={handleSearchLeaveHover}
        className={`${styles.dropdown} ${search ? `${styles.active}` : ""}`}
      >
        <div className={styles.space}></div>
        <HeaderSearch />
      </div>
    </div>
  );
}
