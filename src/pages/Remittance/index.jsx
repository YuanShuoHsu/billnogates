import React, { useState, useEffect } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase"
import { doc, getDoc } from "firebase/firestore";

import Cartbar from "../../components/Cartbar"
import Sidebar from "../../components/Sidebar"
import ScrollToTopButton from "../../components/ScrollToTopButton"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import styles from "./index.module.scss"

export default function Remittance() {

    const location = useLocation();
    const { state } = location
    const { keyWord } = state || {}

    const navigate = useNavigate()

    useEffect(() => {
        if (keyWord === "checkout") {

        }
        else {
            navigate("/checkout")
            alert("請先完成結帳")
        }
    }, [keyWord, navigate])

    const [history, setHistory] = useState(null)

    useEffect(() => {
        const userState = onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                const docRef = doc(db, 'purchase', user.uid);
                getDoc(docRef).then(docSnap => {
                    if (docSnap.exists()) {
                        const { history } = docSnap.data()
                        setHistory(history[history.length - 1])
                    } else {
                        // doc.data() will be undefined in this case
                        // console.log("No such document!");
                    }
                });
            } else {
                // User is signed out

                alert("請先登入會員")
                navigate("/membership/login")
            }
        });
        return () => userState()
    }, [navigate])

    const date = () => {
        const { information } = history
        const { timestamp } = information

        return timestamp.toDate()
    }

    const addDays = (date, days) => {
        date.setDate(date.getDate() + days);
        return date;
    }

    const newDate = days => {
        return addDays(date(), days)
    }

    const renderGetDay = day => {
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

    const renderDate = (days) => {
        if (history) {
            return `${newDate(days).getFullYear()}/${newDate(days).getMonth() + 1}/${newDate(days).getDate()}(${renderGetDay(newDate(days).getDay())})`
        }
    }

    const addZero = (i) => {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const renderTime = (days) => {
        if (history) {
            return `${addZero(newDate(days).getHours())}:${addZero(newDate(days).getMinutes())}`
        }
    }

    const renderInformation = (type) => {
        if (history) {

            const { information } = history
            const { sum, discount, deliveryFee, lastName, firstName, phoneNumber, email, send, address, pay, afterFiveYards, remark } = information

            switch (type) {
                case "sum":
                    return sum
                case "discount":
                    if (discount === null) {
                        return "無"
                    }
                    else if (discount === 0) {
                        return `NT$${discount}`
                    }
                    else if (0 < discount && discount < 1) {
                        return `${discount * 10}折`
                    }
                    else if (1 < discount) {
                        return `NT$${discount}`
                    }
                    break
                case "deliveryFee":
                    return deliveryFee
                case "total":
                    if (discount === null) {
                        return sum + deliveryFee
                    }
                    else if (discount === 0) {
                        return sum
                    }
                    else if (0 < discount && discount < 1) {
                        return sum * discount + deliveryFee
                    }
                    else if (1 < discount) {
                        return sum - discount + deliveryFee
                    }
                    break
                case "name":
                    return lastName + firstName
                case "phoneNumber":
                    return phoneNumber
                case "email":
                    return email
                case "send":
                    return send
                case "address":
                    return address
                case "pay":
                    return pay
                case "afterFiveYards":
                    return `帳號末五碼：${afterFiveYards}`
                case "remark":
                    if (remark === "") {
                        return "無"
                    }
                    else {
                        return remark
                    }
                default:
                    return
            }
        }
    }

    return (
        <div className={styles.Remittance}>
            <Cartbar />
            <Sidebar />
            <ScrollToTopButton />
            <Header />
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.complete}>
                        <h2 className={styles.title}>您的訂單即將完成</h2>
                        <div className={styles.quotation}>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                            </svg>
                            <span className={styles.ellipsis}>此訂單中所需支付的金額為 NT${renderInformation("total")}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.bank}>
                        <h2 className={styles.title}>銀行轉帳</h2>
                        <p className={styles.text}>銀行名稱：玉山銀行(808)</p>
                        <p className={styles.text}>帳戶名稱：許元馨</p>
                        <p className={styles.text}>帳號：</p>
                        <p className={styles.text}>請於 {renderDate(3)} 23:59 前完成匯款，逾時未付款皆視為取消訂單。匯款完成後，將於一週內進行出貨程序。如有任何疑慮，請私訊 Instagram -《比爾公主沒蓋子》billnogates2407。</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.detail}>
                        <h2 className={styles.title}>訂單詳情</h2>
                        <div className={styles.wrap}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>下單時間</h3>
                                <p className={styles.subtext}>{renderDate(0)} {renderTime(0)}</p>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>金額細項</h3>
                                <p className={styles.subtext}>總額：NT${renderInformation("sum")}</p>
                                <p className={styles.subtext}>折扣：{renderInformation("discount")}</p>
                                <p className={styles.subtext}>運費：NT${renderInformation("deliveryFee")}</p>
                                <p className={styles.subtext}>合計：NT${renderInformation("total")}</p>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>聯絡資訊</h3>
                                <p className={styles.subtext}>{renderInformation("name")}</p>
                                <p className={styles.subtext}>{renderInformation("phoneNumber")}</p>
                                <p className={styles.subtext}>{renderInformation("email")}</p>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>寄件方式</h3>
                                <p className={styles.subtext}>{renderInformation("send")}</p>
                                <p className={styles.subtext}>{renderInformation("address")}</p>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>付款方式</h3>
                                <p className={styles.subtext}>{renderInformation("pay")}</p>
                                <p className={styles.subtext}>{renderInformation("afterFiveYards")}</p>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>訂單備註</h3>
                                <p className={styles.subtext}>{renderInformation("remark")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
