import React from 'react'

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Accouncement from '../../components/Accouncement'
import Ticker from "../../components/Ticker"
import Banner from "../../components/Banner"
import Supply from '../../components/Supply'
import Arrangement from "../../components/Arrangement"
import Product from "../../components/Product"
import Pagination from "../../components/Pagination"
import Footer from "../../components/Footer"

import PRODUCTS from '../../dataset/product'

import styles from "./index.module.scss"

export default function Home() {
    return (
        <div className={styles.Home}>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <Accouncement />
            <Banner />
            <Ticker />
            <div className={styles.main}>
                <div className={styles.grid}>
                    <Supply />
                </div>
                <div className={styles.grid}>
                    <Arrangement />
                </div>
                <div className={styles.grid}>
                    <Product PRODUCTS={PRODUCTS} />
                </div>
                <div className={styles.grid}>
                    <Pagination PRODUCTS={PRODUCTS} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
