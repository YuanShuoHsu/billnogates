import React, { Fragment } from 'react'

import { NavLink, Routes, Route } from "react-router-dom"

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTop from "../../components/ScrollToTop"
import Gallery from "../../components/Gallery"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Description from './Description'
import Information from './Information'

import "./index.scss"

export default function Detailed() {
    return (
        <Fragment>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTop />
            <Header />
            <Gallery />
            <div className='Detailed'>
                <div className='router'>
                    <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="description">
                        <button className='description'>商品描述</button>
                    </NavLink>
                    <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="information">
                        <button className='information'>商品資訊</button>
                    </NavLink>
                </div>
                <div className='form'>
                    <Routes>
                        <Route path="description" element={<Description />} />
                        <Route path="information" element={<Information />} />
                        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
                    </Routes>
                </div>

                {/* <NavLink className={({ isActive }) => "loginLink" + (isActive ? " active" : "")} to="login">
                            <button className='loginButton'>登入</button>
                        </NavLink>
                        <NavLink className={({isActive}) => "registerLink" + (isActive ? " active" : "")} to="register" >
                            <button className='registerButton'>註冊</button>
                        </NavLink> */}

            </div>
            <Footer />
        </Fragment>
    )
}
