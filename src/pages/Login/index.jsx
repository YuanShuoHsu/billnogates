import React, { Fragment } from 'react'

import Searchbar from "../../components/Searchbar"
import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Login() {
    return (
        <Fragment>
            <Searchbar />
            <Cartbar />
            <Sidebar />
            <Header />
            <Footer />
        </Fragment>
    )
}
