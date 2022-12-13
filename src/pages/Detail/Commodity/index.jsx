import React from 'react'

import Description from './Description'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function Commodity() {
    return (
        <div className='Commodity'>
            <div className='router'>
                <NavLink replace className={({ isActive }) => "link" + (isActive ? " active" : "")} to="" state={{ link: "description" }}>
                    <button className='button'>商品描述</button>
                </NavLink>
                <NavLink replace className={({ isActive }) => "link" + (isActive ? " active" : "")} to="" state={{ link: "information" }}>
                    <button className='button'>商品資訊</button>
                </NavLink>
            </div>
            <Description />
        </div>
    )
}
