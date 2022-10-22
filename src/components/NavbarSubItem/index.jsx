import React, { Fragment } from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function NavbarSubItem(props) {

    const { subItem } = props

    return (
        <Fragment>
            <li className='navbarSubItem' key={subItem.subId}>
                <NavLink className="subLink" to={subItem.subnav}>
                    <span className='subText'>{subItem.subnav}</span>
                </NavLink>
            </li>
        </Fragment>
    )
}
