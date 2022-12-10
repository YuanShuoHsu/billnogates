import React from 'react'

import { NavLink } from "react-router-dom"

import styles from "./index.module.scss"

export default function HeaderNavGrandItem(props) {

    const { itemLink, subItemLink, grandItem } = props

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <li onClick={stopPropagation} className={styles.HeaderNavGrandItem} key={grandItem.grandId}>
            <NavLink className={({ isActive }) => `${styles.grandHref}` + (isActive ? ` ${styles.active}` : "")} to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}>
                <div className={styles.grandLink}>
                    <span className={styles.grandText}>{grandItem.grandNav}</span>
                </div>
            </NavLink>
        </li>
    )
}
