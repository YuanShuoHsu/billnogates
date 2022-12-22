import React from 'react'

import { useDispatch } from 'react-redux';
import { hide_sidebar } from '../../store/slice/sidebar';

import { NavLink } from "react-router-dom"

import styles from "./index.module.scss"

export default function SidebarNavGrandItem(props) {

    const { itemLink, subItemLink, grandItem } = props

    const dispatch = useDispatch()

    const stopPropagation = (event) => {
        event.stopPropagation()
        dispatch(hide_sidebar())
    }

    return (
        <li onClick={stopPropagation} className={styles.SidebarNavGrandItem} key={grandItem.grandId}>
            <NavLink className={({ isActive }) => `${styles.grandHref}` + (isActive ? ` ${styles.active}` : "")} to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}>
                <div className={styles.grandLink}>
                    <span className={styles.grandText}>{grandItem.grandNav}</span>
                </div>
            </NavLink>
        </li>
    )
}
