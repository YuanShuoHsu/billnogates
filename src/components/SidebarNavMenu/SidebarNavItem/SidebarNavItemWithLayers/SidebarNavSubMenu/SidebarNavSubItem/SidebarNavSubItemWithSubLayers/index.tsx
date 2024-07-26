import { useState } from "react";

import SidebarNavGrandMenu from "./SidebarNavGrandMenu";

import { ReactComponent as AngleDown } from "../../../../../../../images/others/angle-down.svg"

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
      className={`${styles.sidebarNavItemWithLayers} ${subItemClick ? styles["sidebarNavItemWithLayers--active"] : ""
        }`}
      key={subItem.subId}
    >
      <div className={styles["sidebarNavItemWithLayers__subLink--active"]}>
        <span className={styles.sidebarNavItemWithLayers__subText}>
          {subItem.subNav}
        </span>
        <div className={styles.sidebarNavItemWithLayers__svgBox}>
          <AngleDown className={styles.sidebarNavItemWithLayers__svg} />
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
