import { useState } from "react";

import SidebarNavSubMenu from "./SidebarNavSubMenu";

import { ReactComponent as AngleDown } from "../../../../images/others/angle-down.svg"

import styles from "./index.module.scss";

interface SidebarNavItemWithLayersProps {
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
}

export default function SidebarNavItemWithLayers({
  item,
}: SidebarNavItemWithLayersProps) {
  const [itemClick, setItemClick] = useState<boolean>(false);

  const handleClick = () => {
    setItemClick(!itemClick);
  };

  return (
    <li
      onClick={handleClick}
      className={`${styles.sidebarNavItemWithLayers} ${itemClick ? styles["sidebarNavItemWithLayers--active"] : ""
        }`}
      key={item.id}
    >
      <div className={styles["sidebarNavItemWithLayers__link--active"]}>
        <span className={styles.sidebarNavItemWithLayers__text}>
          {item.nav}
        </span>
        <div className={styles.sidebarNavItemWithLayers__svgBox}>
          <AngleDown className={styles.sidebarNavItemWithLayers__svg} />
        </div>
      </div>
      <SidebarNavSubMenu itemClick={itemClick} itemLink={item.link} itemLayers={item.layers} />
    </li>
  );
}
