import { useSelector } from "react-redux";
import { RootState } from "../../store";

import HeaderNavSubItem from "./HeaderNavSubItem";

import styles from "./index.module.scss";

interface HeaderNavItem {
  id: number;
  link: string;
  nav: string;
  layers?: Array<{
    subId: number;
    subLink: string;
    subNav: string;
    subLayers?: Array<{
      grandId: number;
      grandLink: string;
      grandNav: string;
    }>;
  }>;
}

export default function HeaderNavSubMenu() {
  const headerNavItem = useSelector(
    (state: RootState) => state.headerNavItem.value
  ) as HeaderNavItem;

  return (
    <ul className={styles.headerNavSubMenu}>
      {headerNavItem.layers?.map((subItem) => (
        <HeaderNavSubItem
          itemLink={headerNavItem.link}
          subItem={subItem}
          key={subItem.subId}
        />
      ))}
    </ul>
  );
}
