import SidebarNavGrandItem from "../SidebarNavGrandItem";

import styles from "./index.module.scss";

interface SidebarNavGrandMenuProps {
  subItemClick: boolean;
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

export default function SidebarNavGrandMenu({
  subItemClick,
  itemLink,
  subItem,
}: SidebarNavGrandMenuProps) {
  const GrandMenuStyle = {
    "--x": subItem.subLayers?.length,
  } as React.CSSProperties;

  return (
    <ul
      style={GrandMenuStyle}
      className={`${styles.sidebarNavGrandMenu} ${
        subItemClick ? styles["sidebarNavGrandMenu--active"] : ""
      }`}
    >
      {subItem.subLayers?.map((grandItem) => (
        <SidebarNavGrandItem
          itemLink={itemLink}
          subItemLink={subItem.subLink}
          grandItem={grandItem}
          key={grandItem.grandId}
        />
      ))}
    </ul>
  );
}
