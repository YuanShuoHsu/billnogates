import React, { Fragment } from 'react'

import { NavLink, Routes, Route, Navigate } from "react-router-dom"

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
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
            <ScrollToTopButton />
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
                            <Route path="login" >
                                <Route path="" element={<Login />} />
                                <Route path="*" element={<Navigate replace to="" />} />
                            </Route>
                            <Route path="register"  >
                                <Route path="" element={<Register />} />
                                <Route path="*" element={<Navigate replace to="" />} />
                            </Route>
                            <Route path="*" element={<Navigate replace to="login" />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
