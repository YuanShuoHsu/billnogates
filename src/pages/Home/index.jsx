import React from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Accouncement from '../../components/Accouncement'
import Recommend from "../../components/Recommend"
import Banner from "../../components/Banner"
import Supply from '../../components/Supply'
import Arrangement from "../../components/Arrangement"
import Product from "../../components/Product"
import Pagination from "../../components/Pagination"
import Footer from "../../components/Footer"

import styles from "./index.module.scss"

export default function Home() {
    return (
        <div className={styles.Home}>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <Accouncement />
            <Banner />
            <Recommend />
            <div className={styles.main}>
                <div className={styles.grid}>
                    <Supply />
                </div>
                <div className={styles.grid}>
                    <Arrangement />
                </div>
                <div className={styles.grid}>
                    <Product />
                </div>
                <div className={styles.grid}>
                    <Pagination />
                </div>
            </div>
            <Footer />
        </div>
    )
}
