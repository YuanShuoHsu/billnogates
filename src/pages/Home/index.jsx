import React, { Fragment } from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTop from "../../components/ScrollToTop"
import Header from "../../components/Header"
import Recommend from "../../components/Recommend"
import Banner from "../../components/Banner"
import Product from "../../components/Product"
import Footer from "../../components/Footer"

export default function Home() {
    return (
        <Fragment>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTop />
            <Header />
            <Recommend />
            <Banner />
            <Recommend />
            <Product />
            <Footer />
        </Fragment>
    )
}
