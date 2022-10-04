import React from 'react'
import { useNavigate } from "react-router-dom"
import store from "../../redux/store"
import { show_menu } from "../../redux/actions/menu"
import "./index.scss"
import logo from './../../images/logo.png';


export default function Header() {
    const navigate = useNavigate()
    const goHome = () => {
        navigate("")
    }
    const showMenu = () => {
        store.dispatch(show_menu())
    }
    return (
        <div className='header'>
            <img onClick={goHome} className='logo' src={logo} alt="billnogates" />
            <span className='title'>Billnogates</span>
            <svg onClick={showMenu} className='bars' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
        </ div>
    )
}
