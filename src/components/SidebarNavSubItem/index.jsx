import React, { useState, Fragment } from 'react'

import SidebarNavGrandItem from "../SidebarNavGrandItem"

import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../store/slice/sidebar';

import { NavLink } from "react-router-dom"

import styles from "./index.module.scss"

export default function SidebarNavSubItem(props) {

    const dispatch = useDispatch()
    const headerButton = useSelector(state => state.headerButton.value);

    const { handleSubItemLayersLength, itemLink, subItem } = props

    const [subItemClick, setSubItemClick] = useState(false)


    const handleHideSidebar = () => {
        dispatch(hideSidebar())

        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('overflow');
        window.scrollTo(0, headerButton);
    }

    const handleClick = (event, subItemClick) => {
        event.stopPropagation()
        setSubItemClick(subItemClick)

        if (subItemClick === true) {
            handleSubItemLayersLength(subItem.subLayers.length);
        }
        else if (subItemClick === false) {
            handleSubItemLayersLength(-subItem.subLayers.length);
        }
    }

    return (
        <Fragment>
            {
                subItem.subLayers === undefined ?
                    <li onClick={handleHideSidebar} className={styles.SidebarNavSubItem} key={subItem.subId}>
                        <NavLink className={({ isActive }) => `${styles.subHref}` + (isActive ? ` ${styles.active}` : "")} to={`/${itemLink}/${subItem.subLink}`}>
                            <div className={styles.subLink}>
                                <span className={styles.subText}>{subItem.subNav}</span>
                            </div>
                        </NavLink>
                    </li> :
                    <li onClick={(event) => handleClick(event, !subItemClick)} className={`${styles.SidebarNavSubItem} ${subItemClick ? `${styles.active}` : ""}`} key={subItem.subId}>
                        <div className={`${styles.subLink} ${styles.active}`}>
                            <span className={styles.subText}>{subItem.subNav}</span>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            </svg>
                        </div>
                        <ul style={{ "--x": `${subItem.subLayers.length}` }} className={styles.grandMenu}>
                            {
                                subItem.subLayers.map(grandItem =>
                                    <SidebarNavGrandItem itemLink={itemLink} subItemLink={subItem.subLink} grandItem={grandItem} key={grandItem.grandId} />
                                )
                            }
                        </ul>
                    </li>
            }
        </Fragment>
    )
}
