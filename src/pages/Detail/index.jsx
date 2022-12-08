import React from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Gallery from "./Gallery"

import "./index.scss"
import Commodity from './Commodity'

export default function Detailed() {
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
