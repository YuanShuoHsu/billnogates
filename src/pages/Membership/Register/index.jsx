import React, { useState, Fragment } from 'react'
import SocialMedia from './SocialMedia';

import { useNavigate } from "react-router-dom"

import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import "./index.scss"

export default function Register() {

    const navigate = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const [phoneToEmail, setPhoneToEmail] = useState("")
    const [timer, setTimer] = useState(60)
    const [timerIsShow, setTimerIsShow] = useState(false)
    const [timerIsFirst, setTimerIsFirst] = useState(true)
    const [OTPIsShow, setOTPIsShow] = useState(false)
    const [OTP, setOTP] = useState("")
    const [OTPError, setOTPError] = useState("")
    const [passwordIsShow, setPasswordIsShow] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [passwordAgainError, setPasswordAgainError] = useState("")
    const [eyeIsShow, setEyeIsShow] = useState(false)
    const [eyeIsShowAgain, setEyeIsShowAgain] = useState(false)
    const [inputType, setInputType] = useState("password")
    const [inputTypeAgain, setInputTypeAgain] = useState("password")
    const [isLoading, setIsLoading] = useState(false)

    const savePhoneNumber = (event) => {
        const { target } = event
        setPhoneNumber(target.value)
    }

    const saveOTP = (event) => {
        const { target } = event
        const otp = target.value
        setOTP(otp)
        if (otp.length === 6) {
            OTPConfirmationResult(otp)
        }
    }

    const savePassword = (event) => {
        const { target } = event
        setPassword(target.value)
    }

    const savePasswordAgain = (event) => {
        const { target } = event
        setPasswordAgain(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (passwordIsShow === true) {
            const lowerLetter = /[a-z]/g
            const upperLetter = /[A-Z]/g
            const number = /[0-9]/g
            if (!(
                (password.match(lowerLetter) || password.match(upperLetter)) &&
                password.match(number) &&
                password.length >= 8)) {
                setPasswordError("請輸入至少8位字母、數字")
            }
            else if (password !== passwordAgain) {
                setPasswordError("")
                setPasswordAgainError("確認密碼輸入錯誤")
            }
            else {
                setPasswordAgainError("")
                setIsLoading(true)
                createUserWithPhoneAndPassword()
            }
        }
        else if (phoneNumber.length < 10) {
            setPhoneNumberError("請輸入臺灣手機號碼十位數")
        }
        else if (timerIsShow === false) {
            setPhoneNumberError("")
            setIsLoading(true)
            setTimerIsShow(true)
            setTimerIsFirst(false)
            testCreateUser()
            let count = 60;
            let timerId = setInterval(() => {
                count--
                setTimer(count)
                if (count === 0) {
                    clearInterval(timerId);
                    setTimerIsShow(false)
                    setTimer(60)
                }
            }, 1000);
        }
    }

    const testCreateUser = () => {
        const emailAddress = "@gmail.com"
        const testEmail = phoneNumber + emailAddress
        const testPassword = "123456"
        signInWithEmailAndPassword(auth, testEmail, testPassword)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // console.log(userCredential, user)
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(error, errorCode, errorMessage)
                switch (errorCode) {
                    case "auth/user-not-found":
                        phoneNumberSignIn()
                        break
                    case "auth/wrong-password":
                        setPhoneNumberError("手機號碼已被註冊")
                        setIsLoading(false)
                        break
                    default:
                }
            });
    }

    const phoneNumberSignIn = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // console.log("callback")
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // console.log("expired-callback")
            }
        }, auth);

        const appVerifier = window.recaptchaVerifier;
        const countryCode = "+886"
        const newPhoneNumber = phoneNumber.slice(1)
        const tempPhone = countryCode + newPhoneNumber

        signInWithPhoneNumber(auth, tempPhone, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setPhoneNumberError("")
                setOTPIsShow(true)
                setIsLoading(false)
                // console.log(confirmationResult)
            }).catch((error) => {
                // Error; SMS not sent
                const errorMessage = error.message;
                // console.log(error, errorMessage)
                setPhoneNumberError(errorMessage)
                setIsLoading(false)
            });
    }

    const OTPConfirmationResult = (otp) => {
        const confirmationResult = window.confirmationResult
        // console.log(OTP)
        confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
            // const user = result.user;
            // console.log(result, user)
            setOTPError("")
            setPhoneToEmail(phoneNumber)
            setPhoneNumber("")
            setOTP("")
            setPasswordIsShow(true)
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            const errorMessage = error.message;
            // console.log(error, errorMessage)
            setOTPError(errorMessage)
        });
    }

    // const settingPassword = () => {
    //     const user = auth.currentUser;
    //     updatePassword(user, password).then(() => {
    //         // Update successful.
    //         // createUserWithPhoneAndPassword()
    //         setPassword("")
    //         // navigate("/")
    //     }).catch((error) => {
    //         // An error ocurred
    //         // console.log(error, error.message)
    //         const errorMessage = error.message;
    //         setPasswordError(errorMessage)
    //         return
    //     });
    // }

    const createUserWithPhoneAndPassword = () => {
        const emailAddress = "@gmail.com"
        const email = phoneToEmail + emailAddress
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // console.log(userCredential, user)
                setPassword("")
                setPasswordAgain("")
                setIsLoading(false)
                alert("註冊成功")
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(error, errorCode, errorMessage)

                setIsLoading(false)
                switch (errorCode) {
                    case "auth/invalid-email":
                        setPasswordError("手機號碼格式不正確")
                        break
                    case "auth/email-already-in-use":
                        setPasswordError("手機號碼已被註冊")
                        break
                    case "auth/weak-password":
                        setPasswordError("密碼強度不足")
                        break
                    default:
                }
            });
    }

    const toggleEye = () => {
        setEyeIsShow(!eyeIsShow)
        if (eyeIsShow) {
            setInputType("password")
        }
        else {
            setInputType("text")
        }
    }

    const toggleEyeAgain = () => {
        setEyeIsShowAgain(!eyeIsShowAgain)
        if (eyeIsShowAgain) {
            setInputTypeAgain("password")
        }
        else {
            setInputTypeAgain("text")
        }
    }

    return (
        <div className='Register'>
            <form onSubmit={handleSubmit} className='form'>
                {
                    passwordIsShow ?
                        <Fragment>
                            <div className='inputBox'>
                                <input onChange={savePassword} value={password} className='input' type={inputType} required />
                                <span className='text'>密碼</span>
                                {
                                    eyeIsShow ?
                                        <svg onClick={toggleEye} className='svg active' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                                        </svg>
                                        :
                                        <svg onClick={toggleEye} className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
                                        </svg>
                                }
                            </div>
                            <div className='alert'>
                                <p className='text'>{passwordError}</p>
                            </div>
                            <div className='inputBox'>
                                <input onChange={savePasswordAgain} value={passwordAgain} className='input' type={inputTypeAgain} required />
                                <span className='text'>確認密碼</span>
                                {
                                    eyeIsShowAgain ?
                                        <svg onClick={toggleEyeAgain} className='svg active' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                                        </svg>
                                        :
                                        <svg onClick={toggleEyeAgain} className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
                                        </svg>
                                }
                            </div>
                            <div className='alert'>
                                <p className='text'>{passwordAgainError}</p>
                            </div>
                            <div className='register'>
                                <button className='button'>
                                    {
                                        isLoading ?
                                            <div className="loader">
                                                <span className='circle'></span>
                                                <span className='circle'></span>
                                            </div> :
                                            <span className='text'>註冊</span>
                                    }
                                </button>
                            </div>
                        </Fragment> :
                        <Fragment>
                            <div className='inputBox'>
                                <input onChange={savePhoneNumber} value={phoneNumber} className='input' type="text" required />
                                <span className='text'>手機號碼</span>
                            </div>
                            <div className='alert'>
                                <p className='text'>{phoneNumberError}</p>
                            </div>
                            {
                                OTPIsShow ?
                                    <Fragment>
                                        <div className='inputBox'>
                                            <input onChange={saveOTP} value={OTP} className='input' type="text" />
                                            <span className='text'>OTP</span>
                                        </div>
                                        <div className='alert'>
                                            <p className='text'>{OTPError}</p>
                                        </div>
                                    </Fragment>
                                    : null
                            }
                            <div className='register'>
                                <button className='button' id='sign-in-button'>
                                    {
                                        isLoading ?
                                            <div className="loader">
                                                <span className='circle'></span>
                                                <span className='circle'></span>
                                            </div> :
                                            timerIsShow ?
                                                <span className='text'>{timer}秒</span> :
                                                timerIsFirst ?
                                                    <span className='text'>獲取驗證碼</span> :
                                                    <span className='text'>重發驗證碼</span>
                                    }
                                </button>
                            </div>
                        </Fragment>
                }
            </form>
            <div className='others'>
                <span className='divider'></span>
                <p className='or'>或</p>
                <span className='divider'></span>
            </div>
            <SocialMedia />
        </div>
    )
}
