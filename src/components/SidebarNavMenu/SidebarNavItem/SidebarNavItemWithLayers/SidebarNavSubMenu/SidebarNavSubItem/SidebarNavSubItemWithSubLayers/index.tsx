import { useState } from "react";
import SidebarNavGrandMenu from "./SidebarNavGrandMenu";

import styles from "./index.module.scss";

interface SidebarNavSubItemWithSubLayersProps {
  handleSubItemLayersLength: (propsClick: number) => void;
  itemLink: string;
  subItem: {
    subId: number;
    subLink: string;
    subNav: string;
    subLayers?: Array<{
      grandId: number;
      grandLink: string;
      grandNav: string;
    }>;
  };
}

export default function SidebarNavSubItemWithSubLayers({
  handleSubItemLayersLength,
  itemLink,
  subItem,
}: SidebarNavSubItemWithSubLayersProps) {
  const [subItemClick, setSubItemClick] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent, subItemClick: boolean) => {
    event.stopPropagation();
    setSubItemClick(subItemClick);

    if (subItemClick) {
      handleSubItemLayersLength(subItem.subLayers?.length || 0);
    } else {
      handleSubItemLayersLength(-(subItem.subLayers?.length || 0));
    }
  };

  return (
    <li
      onClick={(event) => handleClick(event, !subItemClick)}
      className={`${styles.sidebarNavItemWithLayers} ${
        subItemClick ? styles["sidebarNavItemWithLayers--active"] : ""
      }`}
      key={subItem.subId}
    >
      <div className={styles["sidebarNavItemWithLayers__subLink--active"]}>
        <span className={styles.sidebarNavItemWithLayers__subText}>
          {subItem.subNav}
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
      <SidebarNavGrandMenu
        subItemClick={subItemClick}
        itemLink={itemLink}
        subItem={subItem}
      />
    </li>
  );
}
