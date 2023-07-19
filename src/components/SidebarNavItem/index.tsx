import { Fragment } from "react";

import SidebarNavItemWithoutLayers from "../SidebarNavItemWithoutLayers";
import SidebarNavItemWithLayers from "../SidebarNavItemWithLayers";

interface SidebarNavItemProps {
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

export default function SidebarNavItem({ item }: SidebarNavItemProps) {
  return (
    <Fragment>
      {item.layers ? (
        <SidebarNavItemWithLayers item={item} />
      ) : (
        <SidebarNavItemWithoutLayers item={item} />
      )}
    </Fragment>
  );
}
