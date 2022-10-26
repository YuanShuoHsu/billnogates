import React, { Fragment } from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function NavbarSubItem(props) {

    const { itemLink, subItem } = props

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <Fragment>
            <li className='NavbarSubItem' key={subItem.subId} onClick={stopPropagation}>
                <NavLink className={({ isActive }) => "subLink" + (isActive ? " active" : "")} to={`/${itemLink}/${subItem.subLink}`}>
                    <span className='subText'>{subItem.subnav}</span>
                </NavLink>
            </li>
        </Fragment>
    )
}
