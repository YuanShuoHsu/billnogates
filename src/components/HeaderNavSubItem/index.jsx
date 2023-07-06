import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import HeaderNavGrandItem from "../HeaderNavGrandItem";

import styles from "./index.module.scss";

export default function HeaderNavSubItem(props) {
  const { itemLink, subItem } = props;

  return (
    <li className={styles.HeaderNavSubItem} key={subItem.subId}>
      {subItem.subLayers === undefined ? (
        <NavLink
          className={({ isActive }) =>
            `${styles.subHref}` + (isActive ? ` ${styles.active}` : "")
          }
          to={`/${itemLink}/${subItem.subLink}`}
        >
          <div className={styles.subLink}>
            <span className={styles.subText}>{subItem.subNav}</span>
          </div>
        </NavLink>
      ) : (
        <Fragment>
          <div className={styles.subLink}>
            <span className={styles.subText}>{subItem.subNav}</span>
          </div>
          <ul
            style={{ "--x": `${subItem.subLayers.length}` }}
            className={styles.grandMenu}
          >
            {subItem.subLayers.map((grandItem) => (
              <HeaderNavGrandItem
                itemLink={itemLink}
                subItemLink={subItem.subLink}
                grandItem={grandItem}
                key={grandItem.grandId}
              />
            ))}
          </ul>
        </Fragment>
      )}
    </li>
  );
}
