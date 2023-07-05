import React from 'react'

import HeaderNavSubItem from '../HeaderNavSubItem';

import { useSelector } from 'react-redux'

import styles from "./index.module.scss"

export default function HeaderNavSubMenu() {

    const headerNavItem = useSelector(state => state.headerNavItem.value)

    return (
        <ul className={styles.HeaderNavSubMenu}>
            {
                headerNavItem.layers && headerNavItem.layers.map(subItem =>
                    <HeaderNavSubItem itemLink={headerNavItem.link} subItem={subItem} key={subItem.subId} />
                )
            }
        </ul>
    )
}
