import { useDispatch, useSelector } from "react-redux";
import { changeHeaderNavItem } from "../../store/slice/headerNavItem";
import {
  showHeaderNavSubMenu,
  hideHeaderNavSubMenu,
} from "../../store/slice/headerNavSubMenu";
import { RootState } from "../../store";

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
        className={`${styles.headerNavItemWithLayers__link} ${
          headerNavSubMenu
            ? styles["headerNavItemWithLayers__link--active"]
            : ""
        }`}
      >
        <span className={styles.headerNavItemWithLayers__text}>{item.nav}</span>
        <div className={styles.headerNavItemWithLayers__svgBox}>
          <svg
            className={styles.headerNavItemWithLayers__svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
    </li>
  );
}
