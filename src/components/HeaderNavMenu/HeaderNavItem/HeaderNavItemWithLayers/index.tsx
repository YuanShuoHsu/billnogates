import { useState, useRef, useEffect } from "react";

import HeaderNavSubMenu from "./HeaderNavSubMenu"

import { ReactComponent as AngleDown } from "../../../../images/others/angle-down.svg"

import styles from "./index.module.scss";

interface HeaderNavItemWithLayersProps {
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
  }
}

export default function HeaderNavItemWithLayers({
  item,
}: HeaderNavItemWithLayersProps) {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const navItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navItemRef.current && !navItemRef.current.contains(event.target as Node)) {
        setIsSubMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleOnClick = () => setIsSubMenuVisible(!isSubMenuVisible);

  return (
    <li
      className={styles.headerNavItemWithLayers}
      key={item.id}
      onClick={handleOnClick}
      ref={navItemRef}
    >
      <div
        className={`${styles.headerNavItemWithLayers__link} ${isSubMenuVisible
          ? styles["headerNavItemWithLayers__link--active"]
          : ""
          }`}
      >
        <span className={styles.headerNavItemWithLayers__text}>{item.nav}</span>
        <div className={styles.headerNavItemWithLayers__svgBox}>
          <AngleDown className={styles.headerNavItemWithLayers__svg} />
        </div>
      </div>
      <HeaderNavSubMenu item={item} isSubMenuVisible={isSubMenuVisible} />
    </li>
  );
}
