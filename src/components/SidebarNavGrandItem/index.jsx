import React from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function SidebarNavGrandItem(props) {

    const { itemLink, subItemLink, grandItem } = props

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <li onClick={stopPropagation} className='SidebarNavGrandItem' key={grandItem.grandId}>
            <NavLink className={({ isActive }) => "grandLink" + (isActive ? " active" : "")} to={`/${itemLink}/${subItemLink}/${grandItem.grandLink}`}>
                <span className='grandText'>{grandItem.grandNav}</span>
            </NavLink>
        </li>
    )
}
