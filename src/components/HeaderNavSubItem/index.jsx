import React, { Fragment } from 'react'

import { NavLink } from "react-router-dom"
import HeaderNavGrandItem from '../HeaderNavGrandItem'

import "./index.scss"

export default function HeaderNavSubItem(props) {

    const { itemLink, subItem } = props

    return (
        <Fragment>
            <li className='HeaderNavSubItem' key={subItem.subId}>
                {
                    subItem.subLayers === undefined ?
                        <NavLink className={({ isActive }) => "subLink" + (isActive ? " active" : "")} to={`/${itemLink}/${subItem.subLink}`}>
                            <span className='subText'>{subItem.subNav}</span>
                        </NavLink> :
                        <Fragment>
                            <div className="subLink">
                                <span className='subText'>{subItem.subNav}</span>
                            </div>
                            <ul style={{ "--x": `${subItem.subLayers.length}` }} className="grandMenu">
                                {
                                    subItem.subLayers.map(grandItem => (
                                        <HeaderNavGrandItem itemLink={itemLink} subItemLink={subItem.subLink} grandItem={grandItem} key={grandItem.grandId} />
                                    ))
                                }
                            </ul>
                        </Fragment>
                }
            </li>
        </Fragment>
    )
}
