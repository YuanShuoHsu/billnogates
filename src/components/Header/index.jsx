import React, { useState, useEffect } from 'react'

import Navbar from "../HeaderNav"
import HeaderButton from '../HeaderButton'
import HeaderNavSubMenu from '../HeaderNavSubMenu'

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { show_header, hide_header } from '../../store/slice/header'

import logo from './../../images/logo.png';

import "./index.scss"

export default function Header() {

    const [lastScrollTop, setLastScrollTop] = useState(0)

    const dispatch = useDispatch()
    const header = useSelector(state => state.header.value);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop - lastScrollTop > 10 && scrollTop > 80 && header !== false) {
            dispatch(hide_header())
        }
        else if (lastScrollTop - scrollTop > 5 && header !== true) {
            dispatch(show_header())
        }
        setLastScrollTop(scrollTop)
    }

    return (
        <div style={{ top: `${header ? "0" : "-80px"}` }} className='Header'>
            <div className='box'>
                <Link className='brand' to="/">
                    <img className='logo' src={logo} alt="billnogates" />
                    <span className='title'>Billnogates</span>
                </Link>
                <div className='component'>
                    <Navbar />
                    <HeaderButton />
                </div>
            </div>
            <HeaderNavSubMenu />
        </div>
    )
}
