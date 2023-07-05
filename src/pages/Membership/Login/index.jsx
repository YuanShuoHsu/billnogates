import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from "react-router-dom"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import Divider from '../Divider';
import SocialMedia from '../SocialMedia'
import Loader from '../../../components/Loader';

import styles from "./index.module.scss"

export default function Login() {

    const navigate = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const [timer, setTimer] = useState(Number(localStorage.getItem("countdown")) || 60)
    const [timerIsShow, setTimerIsShow] = useState(Number(localStorage.getItem("countdown")) > 0 ? true : false)
    const [timerIsFirst, setTimerIsFirst] = useState(Number(localStorage.getItem("countdown")) > 0 ? false : true)
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [eyeIsShow, setEyeIsShow] = useState(false)
    const [inputType, setInputType] = useState("password")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let interval = null;
        if (timerIsShow) {
            interval = setInterval(() => {
                if (timer <= 0) {
                    clearInterval(interval);
                    setTimerIsShow(false);
                } else {
                    setTimer(seconds => seconds - 1);
                    localStorage.setItem("countdown", String(timer - 1))
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer, timerIsShow])

    const handleSave = (event, type) => {
        const { target } = event
        switch (type) {
            case "phoneNumber":
                const number = target.value.replace(/[^0-9]/g, '');
                setPhoneNumber(number);
                break
            case "password":
                setPassword(target.value)
                break
            default:
                break
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (timerIsShow === false) {
            setPhoneNumberError("")
            setPasswordError("")
            setIsLoading(true)
            setTimer(60)
            localStorage.setItem("countdown", String(60))
            setTimerIsShow(true)
            setTimerIsFirst(false)
            signInWithPhoneAndPassword()
        }
    }

    const signInWithPhoneAndPassword = () => {
        const emailAddress = "@gmail.com"
        const email = phoneNumber + emailAddress
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in 
                // const user = userCredential.user;
                setIsLoading(false)
                localStorage.removeItem("countdown");
                alert("登入成功")
                navigate("/")
            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(error, errorCode, errorMessage)
                setIsLoading(false)
                switch (errorCode) {
                    case "auth/invalid-email":
                        setPhoneNumberError("手機號碼格式不正確")
                        break
                    case "auth/user-disabled":
                        setPhoneNumberError("手機號碼已被禁用")
                        break
                    case "auth/user-not-found":
                        setPhoneNumberError("手機號碼尚未註冊")
                        break
                    case "auth/wrong-password":
                        setPasswordError("密碼錯誤")
                        break
                    default:
                        setPasswordError(errorCode)
                        break
                }
            });
    }

    const handleToggleEye = () => {
        setEyeIsShow(!eyeIsShow)
        eyeIsShow ? setInputType("password") : setInputType("text")
    }

    return (
        <form onSubmit={handleSubmit} className={styles.Login} >
            <div className={styles.inputBox}>
                <input onChange={event => handleSave(event, "phoneNumber")} value={phoneNumber} className={styles.input} type="text" maxLength={10} required />
                <span className={styles.text}>手機號碼</span>
            </div>
            <div className={styles.alert}>
                <p className={styles.text}>{phoneNumberError}</p>
            </div>
            <div className={styles.inputBox}>
                <input onChange={event => handleSave(event, "password")} value={password} className={styles.input} type={inputType} maxLength={30} required />
                <span className={styles.text}>密碼</span>
                {
                    eyeIsShow ?
                        <svg onClick={handleToggleEye} className={`${styles.svg} ${styles.active}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                        </svg>
                        :
                        <svg onClick={handleToggleEye} className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
                        </svg>
                }
            </div>
            <div className={styles.alert}>
                <p className={styles.text}>{passwordError}</p>
            </div>
            <div className={styles.login}>
                <button className={styles.button}>
                    {
                        isLoading ?
                            <Loader /> :
                            timerIsShow ?
                                <span className={styles.text}>{timer}秒</span> :
                                timerIsFirst ?
                                    <span className={styles.text}>登入</span> :
                                    <span className={styles.text}>重新登入</span>
                    }
                </button>
            </div>
            <div className={styles.forget}>
                <Link className={styles.link} to="/membership/forget">
                    <p className={styles.text}>忘記密碼</p>
                </Link>
            </div>
            <Divider />
            <SocialMedia text={"登入"} />
        </form>
    )
}
