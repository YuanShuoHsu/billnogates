import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../store";
import { changeHeaderNavItem } from "../../../../store/slice/headerNavItem";
import {
  showHeaderNavSubMenu,
  hideHeaderNavSubMenu,
} from "../../../../store/slice/headerNavSubMenu";

import { ReactComponent as AngleDown } from "../../../../images/others/angle-down.svg"

import styles from "./index.module.scss";

interface HeaderNavItemWithLayersProps {
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

export default function HeaderNavItemWithLayers({
  item,
}: HeaderNavItemWithLayersProps) {
  const dispatch = useDispatch();
  const headerNavSubMenu = useSelector(
    (state: RootState) => state.headerNavSubMenu.value
  );

  const handleEnterHover = async () => {
    await dispatch(changeHeaderNavItem(item));
    dispatch(showHeaderNavSubMenu());
  };

  const handleLeaveHover = () => {
    dispatch(hideHeaderNavSubMenu());
  };

  return (
    <li
      onMouseEnter={handleEnterHover}
      onMouseLeave={handleLeaveHover}
      className={styles.headerNavItemWithLayers}
      key={item.id}
    >
      <div
        className={`${styles.headerNavItemWithLayers__link} ${headerNavSubMenu
          ? styles["headerNavItemWithLayers__link--active"]
          : ""
          }`}
      >
        <span className={styles.headerNavItemWithLayers__text}>{item.nav}</span>
        <div className={styles.headerNavItemWithLayers__svgBox}>
          <AngleDown className={styles.headerNavItemWithLayers__svg} />
        </div>
      </div>
    </li>
  );
}
