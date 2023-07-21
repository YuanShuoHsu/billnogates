import HeaderNavGrandMenu from "../HeaderNavGrandMenu";

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

  return (
    <li className={styles.headerNavSubItemWithSubLayers}>
      <div className={styles.headerNavSubItemWithSubLayers__subLink}>
        <span className={styles.headerNavSubItemWithSubLayers__subText}>{subItem.subNav}</span>
      </div>
      <HeaderNavGrandMenu itemLink={itemLink} subItem={subItem}/>
    </li>
  );
}
