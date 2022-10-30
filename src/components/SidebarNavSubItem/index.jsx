import React, { useState, Fragment } from 'react'

import SidebarNavGrandItem from "../SidebarNavGrandItem"

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function SidebarNavSubItem(props) {

    const { itemLink, subItem } = props

    const [click, setClick] = useState(false)

    const handleClick = (event, click) => {
        event.stopPropagation()
        setClick(click)
    }

    return (
        <Fragment>
            <li onClick={(event) => handleClick(event, !click)} className={`SidebarNavSubItem ${click ? "active" : ""}`} key={subItem.subId}>
                {
                    subItem.subLayers === undefined ?
                        <NavLink className={({ isActive }) => "subLink" + (isActive ? " active" : "")} to={`/${itemLink}/${subItem.subLink}`}>
                            <span className='subText'>{subItem.subNav}</span>
                        </NavLink> :
                        <Fragment>
                            <div className="subLink">
                                <span className='subText'>{subItem.subNav}</span>
                                <svg className='angle-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </div>
                            <ul style={{ "--x": `${subItem.subLayers.length}` }} className="grandMenu">
                                {
                                    subItem.subLayers && subItem.subLayers.map(grandItem => (
                                        <SidebarNavGrandItem itemLink={itemLink} subItemLink={subItem.subLink} grandItem={grandItem} key={grandItem.grandId} />
                                    ))
                                }
                            </ul>
                        </Fragment>
                }
            </li>
        </Fragment>
    )
}
