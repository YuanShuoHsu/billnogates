import React, { Fragment } from 'react'

import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { change_headerNavItem } from '../../store/slice/headerNavItem'
import { show_headerNavSubMenu, hide_headerNavSubMenu } from '../../store/slice/headerNavSubMenu'

import "./index.scss"

export default function HeaderNavItem(props) {

    const dispatch = useDispatch()
    const headerNavSubMenu = useSelector(state => state.headerNavSubMenu.value);

    const { item } = props

    const handleEnterHover = async () => {
        await dispatch(change_headerNavItem(item))
        dispatch(show_headerNavSubMenu())
    }

    const handleLeaveHover = () => {
        dispatch(hide_headerNavSubMenu())
    }

    return (
        <Fragment>
            {
                item.layers === undefined ?
                    <li className="HeaderNavItem" key={item.id}>
                        <NavLink className={({ isActive }) => "href" + (isActive ? " active" : "")} to={`/${item.link}`}>
                            <div className='link'>
                                <span className='text'>{item.nav}</span>
                            </div>
                        </NavLink>
                    </li> :
                    <li onMouseEnter={handleEnterHover} onMouseLeave={handleLeaveHover} className="HeaderNavItem" key={item.id}>
                        <div className={`link ${headerNavSubMenu ? "active" : ""}`}>
                            <span className='text'>{item.nav}</span>
                            <svg className="angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            </svg>
                        </div>
                    </li>
            }
        </Fragment>
    )
}
