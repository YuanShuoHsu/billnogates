import React from 'react'

import HeaderNav from "../HeaderNav"
import HeaderButton from '../HeaderButton'
import HeaderNavSubMenu from '../HeaderNavSubMenu'
import HeaderSearch from "../HeaderSearch"

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { showHeaderNavSubMenu, hideHeaderNavSubMenu } from '../../store/slice/headerNavSubMenu'
import { showSearch, hideSearch } from '../../store/slice/search'

import logo from './../../images/home/品牌logo.svg';

import styles from "./index.module.scss"

export default function Header() {

    const dispatch = useDispatch()
    const headerNavSubMenu = useSelector(state => state.headerNavSubMenu.value);
    const search = useSelector(state => state.search.value);

    const handleMenuEnterHover = () => {
        dispatch(showHeaderNavSubMenu())
    }

    const handleMenuLeaveHover = () => {
        dispatch(hideHeaderNavSubMenu())
    }

    const handleSearchEnterHover = () => {
        dispatch(showSearch())
    }

    const handleSearchLeaveHover = () => {
        dispatch(hideSearch())
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
            <div onMouseEnter={handleMenuEnterHover} onMouseLeave={handleMenuLeaveHover} className={`${styles.dropdown} ${headerNavSubMenu ? `${styles.active}` : ""}`}>
                <div className={styles.space}></div>
                <HeaderNavSubMenu />
            </div>
            <div onMouseEnter={handleSearchEnterHover} onMouseLeave={handleSearchLeaveHover} className={`${styles.dropdown} ${search ? `${styles.active}` : ""}`}>
                <div className={styles.space}></div>
                <HeaderSearch />
            </div>
        </div>
    )
}
