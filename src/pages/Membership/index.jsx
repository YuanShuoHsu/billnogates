import React, { Fragment } from 'react'

import { NavLink, Routes, Route } from "react-router-dom"

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
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
            <Header />
            <div className='Membership'>
                <div className='box'>
                    <div className='router'>
                        <NavLink className={({ isActive }) => "loginLink" + (isActive ? " active" : "")} to="login">
                            <button className='loginButton'>登入</button>
                        </NavLink>
                        <NavLink className={({isActive}) => "registerLink" + (isActive ? " active" : "")} to="register" >
                            <button className='registerButton'>註冊</button>
                        </NavLink>
                    </div>
                    <div className='form'>
                        <Routes>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
