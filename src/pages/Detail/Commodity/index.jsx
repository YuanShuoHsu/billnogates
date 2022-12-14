import React from 'react'

import Description from './Description'

import { NavLink, useLocation } from "react-router-dom"

import "./index.scss"

export default function Commodity(props) {

    const { findResult } = props

    const { state } = useLocation()
    const { link } = state

    return (
        <div className='Commodity'>
            <div className='router'>
                <NavLink replace className={() => `link ${link ? "active" : ""}`} to="" state={{ link: true }}>
                    <button className='button'>商品描述</button>
                </NavLink>
                <NavLink replace className={() => `link ${link ? "" : "active"}`} to="" state={{ link: false }}>
                    <button className='button'>商品資訊</button>
                </NavLink>
            </div>
            <Description findResult={findResult} />
        </div>
    )
}
