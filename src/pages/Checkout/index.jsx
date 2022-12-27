import React, { useState } from 'react'

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "./index.scss"

export default function Checkout() {

    const [choose, setChoose] = useState("")

    const handleChecked = (event) => {
        const { target } = event
        setChoose(target.value)
    }

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
                </div>
                <div className='grid'>
                    <div className='shipping'>
                        <h2 className='title'>寄件方式</h2>
                        <div className="content">
                            <div className="radio">
                                <input onChange={handleChecked} className="input" type="radio" name="color" value="Chunghwa_Post" id="Chunghwa_Post" checked={choose === "Chunghwa_Post"} required />
                                <label className="label" htmlFor="Chunghwa_Post" >
                                    <div className='imageBox'>
                                        <img className='image' src={require("../../images/checkout/Chunghwa_Post_Logo.svg").default} alt="郵局" />
                                    </div>
                                    <span className="text">郵局寄送</span>
                                </label>
                            </div>
                            <div className="radio">
                                <input onChange={handleChecked} className="input" type="radio" name="color" value="7-eleven" id="7-eleven" checked={choose === "7-eleven"} required />
                                <label className="label" htmlFor="7-eleven" >
                                    <div className='imageBox'>
                                        <img className='image' src={require("../../images/checkout/7-eleven_logo.svg").default} alt="7-ELEVEN" />
                                    </div>
                                    <span className="text">7-ELEVEN</span>
                                </label>
                            </div>
                            <div className="radio">
                                <input onChange={handleChecked} className="input" type="radio" name="color" value="FamilyMart" id="FamilyMart" checked={choose === "FamilyMart"} required />
                                <label className="label" htmlFor="FamilyMart" >
                                    <div className='imageBox'>
                                        <img className='image' src={require("../../images/checkout/FamilyMart_Logo_(2016-).svg").default} alt="FamilyMart" />
                                    </div>
                                    <span className="text">FamilyMart</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='remark'>
                        <h2 className='title'>訂單備註</h2>
                        <div className='message'>
                            <input className='comments' type="text" placeholder='留言給賣家' />
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}
