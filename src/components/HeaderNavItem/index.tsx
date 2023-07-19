import { Fragment } from "react";

import HeaderNavItemWithoutLayers from "../HeaderNavItemWithoutLayers";
import HeaderNavItemWithLayers from "../HeaderNavItemWithLayers";

interface HeaderNavItemProps {
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

export default function HeaderNavItem({ item }: HeaderNavItemProps) {
  return (
    <Fragment>
      {item.layers ? (
        <HeaderNavItemWithLayers item={item} />
      ) : (
        <HeaderNavItemWithoutLayers item={item} />
      )}
    </Fragment>
  );
}
