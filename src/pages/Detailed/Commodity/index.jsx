import React from 'react'

import Description from './Description'
import Information from './Information'

import { NavLink, Routes, Route, Navigate } from "react-router-dom"

import "./index.scss"

export default function Commodity() {
    return (
        <div className='Commodity'>
            <div className='router'>
                <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="description">
                    <button className='button'>商品描述</button>
                </NavLink>
                <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="information">
                    <button className='button'>商品資訊</button>
                </NavLink>
            </div>
            <Routes>
                <Route path="description" element={<Description />} />
                <Route path="description/*" element={<Navigate replace to="" />} />
                <Route path="information" element={<Information />} />
                <Route path="information/*" element={<Navigate replace to="" />} />
                <Route path="*" element={<Navigate replace to="/detailed/description" />} />
            </Routes>
        </div>
    )
}
