import { useState } from "react";
import SidebarNavSubMenu from "./SidebarNavSubMenu";

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
      className={`${styles.sidebarNavItemWithLayers} ${
        itemClick ? styles["sidebarNavItemWithLayers--active"] : ""
      }`}
      key={item.id}
    >
      <div className={styles["sidebarNavItemWithLayers__link--active"]}>
        <span className={styles.sidebarNavItemWithLayers__text}>
          {item.nav}
        </span>
        <div className={styles.sidebarNavItemWithLayers__svgBox}>
          <svg
            className={styles.sidebarNavItemWithLayers__svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
      <SidebarNavSubMenu itemClick={itemClick} itemLink={item.link} itemLayers={item.layers} />
    </li>
  );
}
