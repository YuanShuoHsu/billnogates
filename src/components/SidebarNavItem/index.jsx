import React, { useState, Fragment } from 'react'

import SidebarNavSubItem from '../SidebarNavSubItem'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function SidebarNavItem(props) {

    const { item } = props

    const [itemClick, setItemClick] = useState(false)

    const [subItemClick, setSubItemClick] = useState(0)

    const handleClick = (itemClick) => {
        setItemClick(itemClick)
    }

    const handleSubItemLayersLength = (click) => {
        setSubItemClick(subItemClick + click)
    }

    return (
        <Fragment>
            <li onClick={() => handleClick(!itemClick)} className={`SidebarNavItem ${itemClick ? "active" : ""}`} key={item.id}>
                {
                    item.layers === undefined ?
                        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to={`/${item.link}`}>
                            <span className='text'>{item.nav}</span>
                        </NavLink> :
                        <Fragment>
                            <div className="link">
                                <span className='text'>{item.nav}</span>
                                <svg className='angle-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </div>
                            <ul style={{ "--x": `${item.layers.length + subItemClick}` }} className="subMenu">
                                {
                                    item.layers.map(subItem => (
                                        <SidebarNavSubItem handleSubItemLayersLength={handleSubItemLayersLength} itemLink={item.link} subItem={subItem} key={subItem.subId} />
                                    ))
                                }
                            </ul>
                        </Fragment>
                }
            </li>
        </Fragment>
    )
}
