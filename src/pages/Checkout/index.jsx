import React, { useState } from 'react'

import { useSelector } from 'react-redux';

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Order from './Order';

import "./index.scss"

export default function Checkout() {

    const [send, setSend] = useState("")
    const [pay, setPay] = useState("")

    const cartbarItem = useSelector(state => state.cartbarItem.value);

    const renderTotal = () => {
        let sum = 0
        cartbarItem && cartbarItem.forEach(item =>
            sum += item.number * item.price
        )
        return sum
    }

    const handleSend = (event) => {
        const { target } = event
        setSend(target.value)
    }

    const renderSwitch = (send) => {
        switch (send) {
            case "Chunghwa_Post":
                return (
                    <div className='content'>
                        <input className='input' type="text" placeholder='地址' required />
                    </div>
                )
            case "7-eleven":
                return (
                    <div className='content'>
                        <div className='href'>
                            <a className='a' href="https://emap.pcsc.com.tw/" target="_blank" rel="noopener noreferrer" >7-ELEVEN 門市查詢</a>
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                        </div>
                        <input className='input' type="text" placeholder='門市名稱' />
                    </div>
                )
            case "FamilyMart":
                return (
                    <div className='content'>
                        <div className='href'>
                            <a className='a' href="https://www.family.com.tw/Marketing/Map" target="_blank" rel="noopener noreferrer" >FamilyMart 門市查詢</a>
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                        </div>
                        <input className='input' type="text" placeholder='店舖名' />
                    </div>
                )
            default:
        }
    }

    const handlePay = (event) => {
        const { target } = event
        setPay(target.value)
    }

    return (
        <div className='Checkout'>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className='main'>
                <div className='grid'>
                    <div className='buy'>
                        <h2 className='title'>購買商品</h2>
                        {
                            cartbarItem.length === 0 ?
                                <p className="p" >目前還是空的</p> :
                                <div className='product'>
                                    {
                                        cartbarItem && cartbarItem.map(item =>
                                            <Order item={item} key={`${item.id} ${item.choose}`} />
                                        )
                                    }
                                    <div className="item">
                                        <div className="total">
                                            <span className="text">
                                                合計：NT.
                                                {
                                                    renderTotal()
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='grid'>
                    <div className='privacy'>
                        <h2 className='title'>聯絡資訊</h2>
                        <div className='name'>
                            <input className='lastName' type="text" placeholder='姓氏' required />
                            <input className='firstName' type="text" placeholder='名字' required />
                        </div>
                        <div className='contact'>
                            <input className='email' type="text" placeholder='電子郵件' required />
                            <input className='phone' type="text" placeholder='手機號碼' required />
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='shipping'>
                        <h2 className='title'>寄件方式</h2>
                        <div className="box">
                            <div className="radio">
                                <input onChange={handleSend} className="input" type="radio" name="send" value="Chunghwa_Post" id="Chunghwa_Post" checked={send === "Chunghwa_Post"} required />
                                <label className="label" htmlFor="Chunghwa_Post" >
                                    <div className='imageBox'>
                                        <img className='image' src={require("../../images/checkout/Chunghwa_Post_Logo.svg").default} alt="郵局" />
                                    </div>
                                    <span className="text">郵局寄送</span>
                                </label>
                            </div>
                            <div className="radio">
                                <input onChange={handleSend} className="input" type="radio" name="send" value="7-eleven" id="7-eleven" checked={send === "7-eleven"} required />
                                <label className="label" htmlFor="7-eleven" >
                                    <div className='imageBox'>
                                        <img className='image' src={require("../../images/checkout/7-eleven_logo.svg").default} alt="7-ELEVEN" />
                                    </div>
                                    <span className="text">7-ELEVEN</span>
                                </label>
                            </div>
                            <div className="radio">
                                <input onChange={handleSend} className="input" type="radio" name="send" value="FamilyMart" id="FamilyMart" checked={send === "FamilyMart"} required />
                                <label className="label" htmlFor="FamilyMart" >
                                    <div className='imageBox'>
                                        <img className='image' src={require("../../images/checkout/FamilyMart_Logo_(2016-).svg").default} alt="FamilyMart" />
                                    </div>
                                    <span className="text">FamilyMart</span>
                                </label>
                            </div>
                        </div>
                        {
                            renderSwitch(send)
                        }
                    </div>
                </div>
                <div className='grid'>
                    <div className='remark'>
                        <h2 className='title'>訂單備註</h2>
                        <div className='message'>
                            <input className='input' type="text" placeholder='留言給賣家' />
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='pay'>
                        <h2 className='title'>付款方式</h2>
                        <div className="box">
                            <div className="radio">
                                <input onChange={handlePay} className="input" type="radio" name="pay" value="bankTransfer" id="bankTransfer" checked={pay === "bankTransfer"} required />
                                <label className="label" htmlFor="bankTransfer" >
                                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h32l-18.8 75.1c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z" />
                                    </svg>
                                    <span className="text">銀行轉帳</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <button className='button'>立即下單</button>
                </div>
            </div>
            <Footer />
        </div >
    )
}
