import React, { useState, useEffect } from 'react'

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Gallery from "./Gallery"
import Commodity from './Commodity'

import { useNavigate, useParams } from 'react-router-dom';

import PRODUCTS from '../../dataset/product'

import styles from "./index.module.scss"

export default function Detail() {

    const [findResult, setFindResult] = useState({})
    const { productId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const findProduct = PRODUCTS.find(detailObj => (
            detailObj.id === Number(productId)
        )) || {}
        setFindResult(findProduct)
        if (Object.keys(findProduct).length === 0) {
            navigate("/detail/1")
        }
    }, [productId, navigate])

    return (
        <div className={styles.Detail}>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className={styles.main}>
                <div className={styles.grid}>
                    <Gallery findResult={findResult} />
                </div>
                <div className={styles.grid}>
                    <Commodity findResult={findResult} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
