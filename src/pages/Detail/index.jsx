import React from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Gallery from "./Gallery"
import Commodity from './Commodity'

import "./index.scss"

export default function Detail() {
    return (
        <div className='Detail'>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className='main'>
                <div className='grid'>
                    <Gallery />
                    <Commodity />
                </div>
            </div>
            <Footer />
        </div>
    )
}
