import React, { Fragment } from 'react'


import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTop from "../../components/ScrollToTop"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Gallery from "./Gallery"

import "./index.scss"
import Commodity from './Commodity'

export default function Detailed() {
    return (
        <Fragment>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTop />
            <Header />
            <div className='Detailed'>
                <Gallery />
                <Commodity />
            </div>
            <Footer />
        </Fragment>
    )
}
