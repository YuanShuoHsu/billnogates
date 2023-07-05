import React, { useState, useEffect, Fragment } from 'react'

import { useNavigate, Link } from 'react-router-dom'

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../utils/firebase"
import { doc, getDoc } from "firebase/firestore";

import styles from "./index.module.scss"

export default function Purchase() {

    const navigate = useNavigate()

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
                        setHistory(history.reverse())
                    } else {
                        setHistory([])
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

    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     if (history) {
    //         const container = scrollRef.current;
    //         const observer = new IntersectionObserver(entries => {
    //             // entries.forEach(entry => {
    //             //     // 如果目标元素进入视口
    //             //     console.log(entry)
    //             //     if (entry.isIntersecting) {
    //             //         // 将背景颜色设置为红色
    //             //         entry.target.style.backgroundColor = 'white';
    //             //     } else {
    //             //         // 将背景颜色设置为白色
    //             //         entry.target.style.backgroundColor = 'red';
    //             //     }
    //             // });
    //         }, { root: null, rootMargin: '0px', threshold: 1 });
    //         observer.observe(container);

    //         return () => {
    //             observer.unobserve(container);
    //         };
    //     }
    // }, [history]);

    const date = item => {
        const { information } = item
        const { timestamp } = information

        return timestamp.toDate()
    }

    const addDays = (date, days) => {
        date.setDate(date.getDate() + days);
        return date;
    }

    const newDate = (days, item) => {
        return addDays(date(item), days)
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

    const renderDate = (days, item) => {
        if (history) {
            return `${newDate(days, item).getFullYear()}/${newDate(days, item).getMonth() + 1}/${newDate(days, item).getDate()}(${renderGetDay(newDate(days, item).getDay())})`
        }
    }

    const addZero = (i) => {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const renderTime = (days, item) => {
        if (history) {
            return `${addZero(newDate(days, item).getHours())}:${addZero(newDate(days, item).getMinutes())}`
        }
    }

    const renderInformation = (type, item) => {
        if (history) {

            const { information } = item
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
        <div className={styles.Purchase}>
            {
                !history ?
                    <span className={styles.text}>資料讀取中...</span> :
                    history.length === 0 ?
                        <span className={styles.text}>無購買紀錄</span> :
                        history.map((item, index) => {
                            return <Fragment key={index}>
                                <Link className={styles.link} to={`${index + 1}`}>
                                    <div className={styles.box} >
                                        <div className={styles.content}>
                                            <h3 className={styles.subtitle}>下單時間</h3>
                                            <p className={styles.subtext}>{renderDate(0, item)} {renderTime(0, item)}</p>
                                        </div>
                                        <div className={styles.content}>
                                            <h3 className={styles.subtitle}>金額細項</h3>
                                            <p className={styles.subtext}>總額：NT${renderInformation("sum", item)}</p>
                                            <p className={styles.subtext}>折扣：{renderInformation("discount", item)}</p>
                                            <p className={styles.subtext}>運費：NT${renderInformation("deliveryFee", item)}</p>
                                            <p className={styles.subtext}>合計：NT${renderInformation("total", item)}</p>
                                        </div>
                                        <div className={styles.content}>
                                            <h3 className={styles.subtitle}>聯絡資訊</h3>
                                            <p className={styles.subtext}>{renderInformation("name", item)}</p>
                                            <p className={styles.subtext}>{renderInformation("phoneNumber", item)}</p>
                                            <p className={styles.subtext}>{renderInformation("email", item)}</p>
                                        </div>
                                        <div className={styles.content}>
                                            <h3 className={styles.subtitle}>寄件方式</h3>
                                            <p className={styles.subtext}>{renderInformation("send", item)}</p>
                                            <p className={styles.subtext}>{renderInformation("address", item)}</p>
                                        </div>
                                        <div className={styles.content}>
                                            <h3 className={styles.subtitle}>付款方式</h3>
                                            <p className={styles.subtext}>{renderInformation("pay", item)}</p>
                                            <p className={styles.subtext}>{renderInformation("afterFiveYards", item)}</p>
                                        </div>
                                        <div className={styles.content}>
                                            <h3 className={styles.subtitle}>訂單備註</h3>
                                            <p className={styles.subtext}>{renderInformation("remark", item)}</p>
                                        </div>
                                    </div>
                                </Link>
                                {
                                    index !== history.length - 1 ?
                                        <span className={styles.line} /> : null
                                }
                            </Fragment>
                        })
            }
        </div>
    )
}
