import React, { Fragment } from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function HeaderNavGrandItem(props) {

    const { itemLink, subItemLink, grandItem } = props

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <Fragment>
            <li onClick={stopPropagation} className='HeaderNavGrandItem' key={grandItem.grandId}>
                <NavLink className={({ isActive }) => "grandLink" + (isActive ? " active" : "")} to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}>
                    <span className='grandText'>{grandItem.grandNav}</span>
                </NavLink>
            </li>
        </Fragment>
    )
}
