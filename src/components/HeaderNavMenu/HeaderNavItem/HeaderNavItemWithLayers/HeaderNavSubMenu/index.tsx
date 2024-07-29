import { useSelector } from "react-redux";

import HeaderNavSubItem from "./HeaderNavSubItem";

import { RootState } from "../../../../../store";

import styles from "./index.module.scss";

interface HeaderNavSubMenuProps {
  item: {
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
  };
  isSubMenuVisible: boolean;
}

export default function HeaderNavSubMenu({ item, isSubMenuVisible }: HeaderNavSubMenuProps) {
  const handleOnClick = (event: React.MouseEvent) => event.stopPropagation();

  return (
    <ul className={`${styles.headerNavSubMenu} ${isSubMenuVisible ? styles.active : ""}`} onClick={handleOnClick}>
      {item.layers?.map((subItem) => (
        <HeaderNavSubItem
          itemLink={item.link}
          subItem={subItem}
          key={subItem.subId}
        />
      ))}
    </ul>
  );
}
