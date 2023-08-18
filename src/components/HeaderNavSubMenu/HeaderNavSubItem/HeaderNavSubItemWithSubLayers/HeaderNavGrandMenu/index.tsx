import HeaderNavGrandItem from "./HeaderNavGrandItem";

import styles from "./index.module.scss";

interface HeaderNavGrandMenuProps {
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

export default function HeaderNavGrandMenu({
  itemLink,
  subItem,
}: HeaderNavGrandMenuProps) {
  const GrandMenuStyle = {
    "--x": subItem.subLayers?.length,
  } as React.CSSProperties;

  return (
    <ul style={GrandMenuStyle} className={styles.headerNavGrandMenu}>
      {subItem.subLayers?.map((grandItem) => (
        <HeaderNavGrandItem
          itemLink={itemLink}
          subItemLink={subItem.subLink}
          grandItem={grandItem}
          key={grandItem.grandId}
        />
      ))}
    </ul>
  );
}
