import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../store/slice/sidebar';

import { NavLink } from "react-router-dom"

import styles from "./index.module.scss"

export default function SidebarNavGrandItem(props) {

    const { itemLink, subItemLink, grandItem } = props

    const dispatch = useDispatch()
    const headerButton = useSelector(state => state.headerButton.value);

    const handleHideSidebar = (event) => {
        event.stopPropagation()
        dispatch(hideSidebar())

        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('overflow');
        window.scrollTo(0, headerButton);
    }

    return (
        <li onClick={handleHideSidebar} className={styles.SidebarNavGrandItem} key={grandItem.grandId}>
            <NavLink className={({ isActive }) => `${styles.grandHref}` + (isActive ? ` ${styles.active}` : "")} to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}>
                <div className={styles.grandLink}>
                    <span className={styles.grandText}>{grandItem.grandNav}</span>
                </div>
            </NavLink>
        </li>
    )
}
