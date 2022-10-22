import React, { useState } from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function NavbarItem(props) {

    const { item } = props

    const [click, setClick] = useState(false)

    const handleClick = (click) => {
        setClick(click)
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <div className="navbarItem">
            <li onClick={() => handleClick(!click)} className={`item ${click ? "active" : ""}`} key={item.id}>
                <NavLink className="link" to={item.layers ? null : item.nav}>
                    <span className='text'>{item.nav}</span>
                    {
                        item.layers ?
                            <svg className='angle-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            </svg> : null
                    }
                </NavLink>
                <ul style={{ "--x": `${item.layers ? item.layers.length : 0}` }} className={`subMenu ${click ? "active" : ""}`} onClick={stopPropagation}>
                    {
                        item.layers && item.layers.map(subItem => (
                            <li className='subItem' key={subItem.subId}>
                                <NavLink className="subLink" to={subItem.subnav}>
                                    <span className='subText'>{subItem.subnav}</span>                                    
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </li>
        </div>
    )
}
