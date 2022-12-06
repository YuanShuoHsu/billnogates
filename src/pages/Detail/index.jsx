import React, { Fragment } from 'react'

import { useParams } from "react-router-dom"

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
    let a=useParams();
    console.log(a)
    return (
        <Fragment>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTop />
            <Header />
            <div className='Detail'>
                <Gallery />
                <Commodity />
            </div>
            <Footer />
        </Fragment>
    )
}
