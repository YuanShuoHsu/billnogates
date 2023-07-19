import { Fragment } from "react";

import SidebarNavSubItemWithoutSubLayers from "../SidebarNavSubItemWithoutSubLayers";
import SidebarNavSubItemWithSubLayers from "../SidebarNavSubItemWithSubLayers";

interface SidebarNavSubItemProps {
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

export default function SidebarNavSubItem({
  handleSubItemLayersLength,
  itemLink,
  subItem,
}: SidebarNavSubItemProps) {
  return (
    <Fragment>
      {subItem.subLayers ? (
        <SidebarNavSubItemWithSubLayers
          handleSubItemLayersLength={handleSubItemLayersLength}
          itemLink={itemLink}
          subItem={subItem}
        />
      ) : (
        <SidebarNavSubItemWithoutSubLayers
          itemLink={itemLink}
          subItem={subItem}
        />
      )}
    </Fragment>
  );
}
