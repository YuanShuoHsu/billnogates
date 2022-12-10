import React from 'react'

import NAVS from "../../dataset/navbar"
import NavbarItem from '../HeaderNavItem'

import styles from "./index.module.scss"

export default function HeaderNav() {
  return (
    <div className={styles.HeaderNav}>
      <ul className={styles.menu}>
        {
          NAVS && NAVS.map(item =>
            <NavbarItem item={item} key={item.id} />
          )
        }
      </ul>
    </div>
  )
}
