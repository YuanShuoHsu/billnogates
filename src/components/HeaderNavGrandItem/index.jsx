import React from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function HeaderNavGrandItem(props) {

    const { itemLink, subItemLink, grandItem } = props

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <li onClick={stopPropagation} className='HeaderNavGrandItem' key={grandItem.grandId}>
            <NavLink className={({ isActive }) => "grandHref" + (isActive ? " active" : "")} to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}>
                <div className='grandLink'>
                    <span className='grandText'>{grandItem.grandNav}</span>
                </div>
            </NavLink>
        </li>
    )
}
