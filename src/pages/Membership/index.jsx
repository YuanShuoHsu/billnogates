import React, { useState } from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Login from "./Login"
import Register from "./Register"

import styles from "./index.module.scss"

export default function Membership() {

    const [activeButton, setActiveButton] = useState(true)

    const handleActiveButton = (boolean) => {
        setActiveButton(boolean)
    }
    
    return (
        <div className={styles.Membership}>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.router}>
                        <button onClick={() => handleActiveButton(true)} className={`${styles.button} ${activeButton ? styles.active : ""}`}>登入</button>
                        <button onClick={() => handleActiveButton(false)} className={`${styles.button} ${activeButton ? "" : styles.active}`}>註冊</button>
                    </div>
                    <div className={styles.form}>
                        {
                            activeButton ?
                                <Login /> :
                                <Register />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
