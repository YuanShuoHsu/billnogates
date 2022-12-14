import React, { useState, useEffect } from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Gallery from "./Gallery"
import Commodity from './Commodity'

import { useNavigate, useParams } from 'react-router-dom';

import PRODUCTS from '../../dataset/product'

import "./index.scss"

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
            navigate("/detail/1", { state: { link: true } })
        }
    }, [productId, navigate])

    return (
        <div className='Detail'>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className='main'>
                <div className='grid'>
                    <Gallery findResult={findResult} />
                    <Commodity findResult={findResult} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
