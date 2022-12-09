import React from 'react'

import HeaderNav from "../HeaderNav"
import HeaderButton from '../HeaderButton'
import HeaderNavSubMenu from '../HeaderNavSubMenu'

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { show_headerNavSubMenu, hide_headerNavSubMenu } from '../../store/slice/headerNavSubMenu'

import logo from './../../images/home/logo.png';

import "./index.scss"

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
        <div className='Header'>
            <div className='box'>
                <Link className='link' to="/">
                    <button className='brand'>
                        <img className='logo' src={logo} alt="billnogates" loading="lazy" />
                        <span className='title'>
                            <span className='blue'>B</span>
                            <span className='pink'>ill</span>
                            <span className='yellow'>no</span>
                            <span className='blue'>g</span>
                            <span className='pink'>ates</span>
                        </span>
                    </button>
                </Link>
                <div className='content'>
                    <HeaderNav />
                    <HeaderButton />
                </div>
            </div>
            <div onMouseEnter={handleEnterHover} onMouseLeave={handleLeaveHover} className={`dropdown ${headerNavSubMenu ? "active" : ""}`}>
                <div className='space'></div>
                <HeaderNavSubMenu />
            </div>
        </div>
    )
}
