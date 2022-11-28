import React, { Fragment } from 'react'

import { NavLink, Routes, Route, Navigate } from "react-router-dom"

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTop from "../../components/ScrollToTop"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Login from "./Login"
import Register from "./Register"

import "./index.scss"

export default function Membership() {
    return (
        <Fragment>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTop />
            <Header />
            <div className='Membership'>
                <div className='box'>
                    <div className='router'>
                        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="login">
                            <button className='login'>登入</button>
                        </NavLink>
                        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="register" >
                            <button className='register'>註冊</button>
                        </NavLink>
                    </div>
                    <div className='form'>
                        <Routes>
                            <Route path="login" element={<Login />} />
                            <Route path="login/*" element={<Navigate replace to="" />} />
                            <Route path="register" element={<Register />} />
                            <Route path="register/*" element={<Navigate replace to="" />} />
                            <Route path="*" element={<Navigate replace to="/membership/login" />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
