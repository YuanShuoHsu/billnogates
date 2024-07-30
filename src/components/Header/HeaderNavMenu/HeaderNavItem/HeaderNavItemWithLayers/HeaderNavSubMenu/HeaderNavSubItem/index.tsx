import { Fragment } from "react";

import HeaderNavSubItemWithoutSubLayers from "./HeaderNavSubItemWithoutSubLayers";
import HeaderNavSubItemWithSubLayers from "./HeaderNavSubItemWithSubLayers";

interface HeaderNavSubItemProps {
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

export default function HeaderNavSubItem({
  itemLink,
  subItem,
}: HeaderNavSubItemProps) {
  return (
    <Fragment>
      {subItem.subLayers ? (
        <HeaderNavSubItemWithSubLayers itemLink={itemLink} subItem={subItem} />
      ) : (
        <HeaderNavSubItemWithoutSubLayers
          itemLink={itemLink}
          subItem={subItem}
        />
      )}
    </Fragment>
  );
}
