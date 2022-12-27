import React, { Fragment } from 'react'

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Arrangement from "../../components/Arrangement"
import Product from "../../components/Product"
import Pagination from "../../components/Pagination"
import Footer from "../../components/Footer"

import { useLocation } from 'react-router-dom';

import PRODUCTS from '../../dataset/product'

import styles from "./index.module.scss"

export default function Find() {

    const location = useLocation();
    const { state } = location
    const { keyWord } = state || {}

    const findProduct = PRODUCTS.filter(item =>
        keyWord ? item.name.toLowerCase().includes(keyWord.toLowerCase()) : null
    )

    return (
        <div className={styles.Find}>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className={styles.main}>
                {
                    findProduct.length === 0 ?
                        <h2 className={styles.title}>無符合「{keyWord}」商品</h2> :
                        <Fragment>
                            <div className={styles.grid}>
                                <Arrangement />
                            </div>
                            <div className={styles.grid}>
                                <Product PRODUCTS={findProduct} />
                            </div>
                            <div className={styles.grid}>
                                <Pagination PRODUCTS={findProduct} />
                            </div>
                        </Fragment>
                }
            </div>
            <Footer />
        </div>
    )
}
