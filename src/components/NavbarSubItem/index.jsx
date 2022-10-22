import React from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function NavbarSubItem(props) {
    const { subItem } = props
    return (
        <div className='navbarSubItem'>
            <li className='subItem' key={subItem.subId}>
                <NavLink className="subLink" to={subItem.subnav}>
                    <span className='subText'>{subItem.subnav}</span>
                </NavLink>
            </li>
        </div>
    )
}
