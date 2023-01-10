import React from 'react'

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "./index.scss"

export default function Remittance() {
    return (
        <div className='Remittance'>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className='main'>
                <div className='grid'>
                    <h2 className='title'>您的訂單即將完成</h2>
                    <div className='quotation'>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                        </svg>
                        <span className='text'>此訂單中所需支付的金額為NT$180</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
