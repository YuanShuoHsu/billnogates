import React from 'react'

import { NavLink, Routes, Route, Navigate } from "react-router-dom"

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Login from "./Login"
import Register from "./Register"
import Forget from './Forget'

import Recaptcha from './Recaptcha'

import styles from "./index.module.scss"

export default function Membership() {
    return (
        <div className={styles.Membership}>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.router}>
                        <NavLink className={({ isActive }) => `${styles.link}` + (isActive ? ` ${styles.active}` : "")} to="login">
                            <button className={styles.button}>登入</button>
                        </NavLink>
                        <NavLink className={({ isActive }) => `${styles.link}` + (isActive ? ` ${styles.active}` : "")} to="register" >
                            <button className={styles.button}>註冊</button>
                        </NavLink>
                    </div>
                    <div className={styles.form}>
                        <Routes>
                            <Route path="login">
                                <Route path="" element={<Login />} />
                                <Route path="*" element={<Navigate replace to="" />} />
                            </Route>
                            <Route path="register">
                                <Route path="" element={<Register />} />
                                <Route path="*" element={<Navigate replace to="" />} />
                            </Route>
                            <Route path="forget">
                                <Route path="" element={<Forget />} />
                                <Route path="*" element={<Navigate replace to="" />} />
                            </Route>
                            <Route path="*" element={<Navigate replace to="login" />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="register">
                    <Route path="" element={<Recaptcha />} />
                    <Route path="*" element={<Navigate replace to="" />} />
                </Route>
                <Route path="forget">
                    <Route path="" element={<Recaptcha  />} />
                    <Route path="*" element={<Navigate replace to="" />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}