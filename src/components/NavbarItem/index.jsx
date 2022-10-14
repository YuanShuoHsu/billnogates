import React, { useState } from 'react'
import "./index.scss"

import { NavLink } from "react-router-dom"

export default function NavbarItem(props) {

    const { item } = props

    const [click, setClick] = useState(false)

    const handleClick = (click) => {
        setClick(click)
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    const ulHeight = (currentNode) => {
        if (currentNode !== null) {
            currentNode.style.setProperty("--x", currentNode.children.length)
        }
    }

    return (
        <div className="navbarItem">
            <li onClick={() => handleClick(!click)} className={`item ${click ? "active" : ""}`} key={item.id}>
                <NavLink className="link" to={item.layers ? null : item.nav}>
                    <span className='text'>{item.nav}</span>
                    {
                        item.layers ?
                            <svg className='caret-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg> : null
                    }
                </NavLink>
                <ul ref={ulHeight} className={`subMenu ${click ? "active" : ""}`} onClick={stopPropagation}>
                    {
                        item.layers && item.layers.map(subItem => (
                            <li className='subItem' key={subItem.subId}>
                                <NavLink className="subLink" to={subItem.subnav}>{subItem.subnav}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </li>
        </div>
    )
}
