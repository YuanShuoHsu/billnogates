import HeaderNavGrandItem from "../HeaderNavGrandItem";

import styles from "./index.module.scss";

interface HeaderNavSubItemWithSubLayersProps {
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

export default function HeaderNavSubItemWithSubLayers({
  itemLink,
  subItem,
}: HeaderNavSubItemWithSubLayersProps) {
  const GrandMenuStyle = {
    "--x": subItem.subLayers?.length,
  } as React.CSSProperties;

  return (
    <li className={styles.headerNavSubItem}>
      <div className={styles.subLink}>
        <span className={styles.subText}>{subItem.subNav}</span>
      </div>
      <ul style={GrandMenuStyle} className={styles.grandMenu}>
        {subItem.subLayers?.map((grandItem) => (
          <HeaderNavGrandItem
            itemLink={itemLink}
            subItemLink={subItem.subLink}
            grandItem={grandItem}
            key={grandItem.grandId}
          />
        ))}
      </ul>
    </li>
  );
}
