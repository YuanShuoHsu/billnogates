import React, { useState, Fragment } from 'react'

import SidebarNavSubItem from '../SidebarNavSubItem'

import { NavLink } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../store/slice/sidebar';

import styles from "./index.module.scss"

export default function SidebarNavItem(props) {

    const dispatch = useDispatch()
    const headerButton = useSelector(state => state.headerButton.value);

    const { item } = props

    const [itemClick, setItemClick] = useState(false)

    const [subItemClick, setSubItemClick] = useState(0)

    const handleHideSidebar = () => {
        dispatch(hideSidebar())

        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('overflow');
        window.scrollTo(0, headerButton);
    }

    const handleClick = (itemClick) => {
        setItemClick(itemClick)
    }

    const handleSubItemLayersLength = (propsClick) => {
        setSubItemClick(subItemClick + propsClick)
    }

    return (
        <Fragment>
            {
                item.layers === undefined ?
                    <li onClick={handleHideSidebar} className={styles.SidebarNavItem} key={item.id}>
                        <NavLink className={({ isActive }) => `${styles.href}` + (isActive ? ` ${styles.active}` : "")} to={`/${item.link}`}>
                            <div className={styles.link}>
                                <span className={styles.text}>{item.nav}</span>
                            </div>
                        </NavLink>
                    </li> :
                    <li onClick={() => handleClick(!itemClick)} className={`${styles.SidebarNavItem} ${itemClick ? `${styles.active}` : ""}`} key={item.id}>
                        <div className={`${styles.link} ${styles.active}`}>
                            <span className={styles.text}>{item.nav}</span>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            </svg>
                        </div>
                        <ul style={{ "--x": `${item.layers.length + subItemClick}` }} className={styles.subMenu}>
                            {
                                item.layers.map(subItem =>
                                    <SidebarNavSubItem handleSubItemLayersLength={handleSubItemLayersLength} itemLink={item.link} subItem={subItem} key={subItem.subId} />
                                )
                            }
                        </ul>
                    </li>
            }
        </Fragment>
    )
}
