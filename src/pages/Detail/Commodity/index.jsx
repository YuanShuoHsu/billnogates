import React from 'react'

import Description from './Description'
import Information from './Information'

import { NavLink, Routes, Route, Navigate } from "react-router-dom"

import "./index.scss"

export default function Commodity() {
    return (
        <div className='Commodity'>
            <div className='router'>
                <NavLink replace className={({ isActive }) => "link" + (isActive ? " active" : "")} to="description">
                    <button className='button'>商品描述</button>
                </NavLink>
                <NavLink replace className={({ isActive }) => "link" + (isActive ? " active" : "")} to="information">
                    <button className='button'>商品資訊</button>
                </NavLink>
            </div>
            <Routes>
                <Route path="description"  >
                    <Route path="" element={<Description />} />
                    <Route path="*" element={<Navigate replace to="" />} />
                </Route>
                <Route path="information" >
                    <Route path="" element={<Information />} />
                    <Route path="*" element={<Navigate replace to="" />} />
                </Route>
                <Route path="*" element={<Navigate replace to="description" />} />
            </Routes>
        </div>
    )
}
