import React, { Fragment } from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTop from "../../components/ScrollToTop"
import Gallery from "../../components/Gallery"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


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
            <div className='Detailed'>Detailed</div>
            <Footer />
        </Fragment>
    )
}
