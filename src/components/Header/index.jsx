import React, { useState, useEffect} from 'react'

import Navbar from "../Navbar"
import NavbarSubMenu from '../NavbarSubMenu'
import HeaderButton from '../HeaderButton'

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
// import { show_searchbar } from "../../store/slice/searchbar"
// import { show_cartbar } from "../../store/slice/cartbar"
// import { show_sidebar } from '../../store/slice/sidebar'
import { show_header, hide_header } from '../../store/slice/header'

import logo from './../../images/logo.png';

import "./index.scss"

export default function Header() {

    const [lastScrollTop, setLastScrollTop] = useState(0)
    // const [headerTop, setHeaderTop] = useState(true)

    const dispatch = useDispatch()
    // const cartbarItem = useSelector(state => state.cartbarItem.value);
    const header = useSelector(state => state.header.value);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop - lastScrollTop > 10 && scrollTop > 80 && header !== false) {
            // setHeaderTop(false)
            dispatch(hide_header())
        }
        else if (lastScrollTop - scrollTop > 5 && header !== true) {
            // setHeaderTop(true)
            dispatch(show_header())
        }
        setLastScrollTop(scrollTop)
    }

    // const showSearch = () => {
    //     dispatch(show_searchbar())
    // }

    // const showCart = () => {
    //     dispatch(show_cartbar())
    // }

    // const showMenu = () => {
    //     dispatch(show_sidebar())
    // }

    return (
        <div style={{ top: `${header ? "0" : "-80px"}` }} className='Header'>
            <div className='box'>
                <Link className='brand' to="/">
                    <img className='logo' src={logo} alt="billnogates" />
                    <span className='title'>Billnogates</span>
                </Link>
                <div className='navbarContainer'>
                    <Navbar className="Navbar" />
                    <HeaderButton />
                </div>
            </div>
            <NavbarSubMenu />
        </div>
    )
}
