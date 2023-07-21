import { Link } from "react-router-dom";

import HeaderBrand from "../HeaderBrand";
import HeaderNavMenu from "../HeaderNavMenu";
import HeaderButton from "../HeaderButton";
import HeaderDropdown from "../HeaderDropdown";
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
    <header className={styles.header}>
      <div className={styles.header__box}>
        <Link className={styles.header__link} to="/">
          <HeaderBrand />
        </Link>
        <nav className={styles.header__content}>
          <HeaderNavMenu />
          <HeaderButton />
        </nav>
      </div>
      <HeaderDropdown
        handleEnter={handleMenuEnterHover}
        handleLeave={handleMenuLeaveHover}
        condition={headerNavSubMenu}
      >
        <HeaderNavSubMenu />
      </HeaderDropdown>
      <HeaderDropdown
        handleEnter={handleSearchEnterHover}
        handleLeave={handleSearchLeaveHover}
        condition={search}
      >
        <HeaderSearch />
      </HeaderDropdown>
    </header>
  );
}
