import React, { Fragment } from 'react'

import HeaderNavSubItem from '../HeaderNavSubItem';

import { useDispatch, useSelector } from 'react-redux'
import { show_headerNavSubMenu, hide_headerNavSubMenu } from '../../store/slice/headerNavSubMenu'

import "./index.scss"

export default function HeaderNavSubMenu() {

    const dispatch = useDispatch()

    const headerNavItem = useSelector(state => state.headerNavItem.value)
    const headerNavSubMenu = useSelector(state => state.headerNavSubMenu.value);

    const handleEnterHover = () => {
        dispatch(show_headerNavSubMenu())
    }

    const handleLeaveHover = () => {
        dispatch(hide_headerNavSubMenu())
    }

    return (
        <ul onMouseEnter={handleEnterHover} onMouseLeave={handleLeaveHover} className={`HeaderNavSubMenu ${headerNavSubMenu ? "active" : ""}`}>
            {
                headerNavItem.layers === undefined ? null :
                    <Fragment>
                        <div className='space'>空白</div>
                        {
                            headerNavItem.layers.map(subItem => (
                                <HeaderNavSubItem itemLink={headerNavItem.link} subItem={subItem} key={subItem.subId} />
                            ))
                        }
                    </Fragment>
            }
        </ul>
    )
}
