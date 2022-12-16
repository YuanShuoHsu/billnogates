import React from 'react'

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "./index.scss"

export default function Checkout() {
    return (
        <div className='Checkout'>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className='main'>
                <div className='grid'>
                    <div className='privacy'>
                        <h2 className='title'>聯絡資訊</h2>
                        <div className='name'>
                            <input className='lastName' type="text" placeholder='姓氏' />
                            <input className='firstName' type="text" placeholder='名字' />
                        </div>
                        <div className='contact'>
                            <input className='email' type="text" placeholder='電子郵件' />
                            <input className='phone' type="text" placeholder='手機號碼' />
                        </div>
                    </div>
                    <div className='box'>
                        <h2 className='title'>收件地址</h2>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='remark'>
                        <h2 className='title'>訂單備註</h2>
                        <div className='message'>
                            <input className='comments' type="text" placeholder='留言給賣家' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
