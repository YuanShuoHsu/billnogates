import React from 'react'

import HeaderNav from "../HeaderNav"
import HeaderButton from '../HeaderButton'
import HeaderNavSubMenu from '../HeaderNavSubMenu'

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { show_headerNavSubMenu, hide_headerNavSubMenu } from '../../store/slice/headerNavSubMenu'

import logo from './../../images/home/logo.png';

import styles from "./index.module.scss"

export default function Header() {

    const dispatch = useDispatch()
    const headerNavSubMenu = useSelector(state => state.headerNavSubMenu.value);

    const handleEnterHover = () => {
        dispatch(show_headerNavSubMenu())
    }

    const handleLeaveHover = () => {
        dispatch(hide_headerNavSubMenu())
    }

    return (
        <div className={styles.Header}>
            <div className={styles.box}>
                <Link className={styles.link} to="/">
                    <button className={styles.brand}>
                        <img className={styles.logo} src={logo} alt="billnogates" loading="lazy" />
                        <span className={styles.title}>
                            <span className={styles.blue}>B</span>
                            <span className={styles.pink}>ill</span>
                            <span className={styles.yellow}>no</span>
                            <span className={styles.blue}>g</span>
                            <span className={styles.pink}>ates</span>
                        </span>
                    </button>
                </Link>
                <div className={styles.content}>
                    <HeaderNav />
                    <HeaderButton />
                </div>
            </div>
            <div onMouseEnter={handleEnterHover} onMouseLeave={handleLeaveHover} className={`${styles.dropdown} ${headerNavSubMenu ? `${styles.active}` : ""}`}>
                <div className={styles.space}></div>
                <HeaderNavSubMenu />
            </div>
        </div>
    )
}
