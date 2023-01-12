import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase"

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "./index.scss"

export default function Remittance() {

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            } else {
                // User is signed out
                alert("請先登入會員")
                navigate("/membership/login")
            }
        });
    }, [navigate])

    const addDays = (date, days) => {
        date.setDate(date.getDate() + days);
        return date;
    }

    const date = new Date();

    const newDate = addDays(date, 3);

    const renderGetDay = (day) => {
        switch (day) {
            case 0:
                return "日"
            case 1:
                return "一"
            case 2:
                return "二"
            case 3:
                return "三"
            case 4:
                return "四"
            case 5:
                return "五"
            case 6:
                return "六"
            default:
                return
        }
    }

    const renderDate = () => {
        return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}(${renderGetDay(newDate.getDay())})`
    }

    return (
        <div className='Remittance'>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className='main'>
                <div className='grid'>
                    <div className='complete'>
                        <h2 className='title'>您的訂單即將完成</h2>
                        <div className='quotation'>
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                            </svg>
                            <span className='ellipsis'>此訂單中所需支付的金額為NT$180</span>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='bank'>
                        <h2 className='title'>銀行轉帳</h2>
                        <p className='text'>銀行名稱：玉山銀行</p>
                        <p className='text'>帳戶名稱：許元馨</p>
                        <p className='text'>帳號：</p>
                        <p className='text'>請於 {renderDate()} 23:59 前完成匯款</p>
                        <p className='text'>當此支付完成後，將會盡快出貨？</p>
                    </div>
                </div>
                <div className='grid'>
                    <div className='detail'>
                        <h2 className='title'>訂單詳情</h2>
                        <div className='wrap'>
                            <div className='content'>
                                <h3 className='subtitle'>收件地址</h3>
                                <p className='subtext'>許元碩</p>
                                <p className='subtext'>許元碩</p>
                            </div>
                            <div className='content'>
                                <h3 className='subtitle'>帳單地址</h3>
                            </div>
                            <div className='content'>
                                <h3 className='subtitle'>配送方式</h3>
                            </div>
                            <div className='content'>
                                <h3 className='subtitle'>付款方式</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
