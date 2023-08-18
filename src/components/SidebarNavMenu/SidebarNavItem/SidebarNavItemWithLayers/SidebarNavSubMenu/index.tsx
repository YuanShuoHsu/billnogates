import { useState } from "react";
import SidebarNavSubItem from "./SidebarNavSubItem";

import styles from "./index.module.scss";

interface SidebarNavSubMenuProps {
  itemClick: boolean;
  itemLink: string;
  itemLayers?: Array<{
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

export default function SidebarNavSubMenu({
  itemClick,
  itemLink,
  itemLayers,
}: SidebarNavSubMenuProps) {
  const [subItemClick, setSubItemClick] = useState<number>(0);

  const handleSubItemLayersLength = (propsClick: number) => {
    setSubItemClick((prevSubItemClick) => prevSubItemClick + propsClick);
  };

  const subMenuStyle = {
    "--x": itemLayers?.length ? itemLayers.length + subItemClick : 0,
  } as React.CSSProperties;

  return (
    <ul
      style={subMenuStyle}
      className={`${styles.sidebarNavSubMenu} ${
        itemClick ? styles["sidebarNavSubMenu--active"] : ""
      }`}
    >
      {itemLayers?.map((subItem) => (
        <SidebarNavSubItem
          handleSubItemLayersLength={handleSubItemLayersLength}
          itemLink={itemLink}
          subItem={subItem}
          key={subItem.subId}
        />
      ))}
    </ul>
  );
}
