import React, { useState, Fragment } from 'react'

import NavbarSubItem from '../NavbarSubItem'

import { NavLink, Link } from "react-router-dom"

import "./index.scss"

export default function NavbarItem(props) {

    const { item } = props

    const [click, setClick] = useState(false)

    const handleClick = (click) => {
        setClick(click)
    }

    return (
        <Fragment>
            <li onClick={() => handleClick(!click)} className={`navbarItem ${click ? "active" : ""}`} key={item.id}>
                {
                    item.layers === undefined ?
                        <NavLink className="link" to={item.nav}>
                            <span className='text'>{item.nav}</span>
                        </NavLink> :
                        <Fragment>
                            <Link className="link">
                                <span className='text'>{item.nav}</span>
                                <svg className='angle-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </Link>
                            <ul style={{ "--x": `${item.layers.length}` }} className="subMenu">
                                {
                                    item.layers && item.layers.map(subItem => (
                                        <NavbarSubItem subItem={subItem} key={subItem.subId} />
                                    ))
                                }
                            </ul>
                        </Fragment>
                }
            </li>
        </Fragment>
    )
}
