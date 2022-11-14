import React, { useState } from 'react'

import SocialMedia from './SocialMedia'

import { useNavigate } from "react-router-dom"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"

import "./index.scss"

export default function Login() {

    const navigate = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const savePhoneNumber = (event) => {
        const { target } = event
        setPhoneNumber(target.value)
    }

    const savePassword = (event) => {
        const { target } = event
        setPassword(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        asignInWithPhoneAndPassword()
    }

    const asignInWithPhoneAndPassword = () => {
        const emailAddress = "@gmail.com"
        const email = phoneNumber + emailAddress
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential, user)
                setIsLoading(false)
                alert("登入成功")
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(error, errorCode, errorMessage)
                setIsLoading(false)
                switch (errorCode) {
                    case "auth/invalid-email":
                        setPhoneNumberError("手機號碼格式不正確")
                        break
                    case "auth/user-not-found":
                        setPhoneNumberError("手機號碼尚未註冊")
                        break
                    case "auth/wrong-password":
                        setPasswordError("密碼錯誤")
                        break
                    default:
                }
            });
    }

    return (
        <div className='Login' >
            <form onSubmit={handleSubmit} className="form">
                <div className='inputBox'>
                    <input onChange={savePhoneNumber} value={phoneNumber} className='input' type="text" required />
                    <span className='text'>手機號碼</span>
                </div>
                <div className='alert'>
                    <p className='text'>{phoneNumberError}</p>
                </div>
                <div className='inputBox'>
                    <input onChange={savePassword} value={password} className='input' type="text" required />
                    <span className='text'>密碼</span>
                </div>
                <div className='alert'>
                    <p className='text'>{passwordError}</p>
                </div>
                <div className='login'>
                    <button className='button'>
                        {
                            isLoading ?
                                <div className="loader">
                                    <span className='circle'></span>
                                    <span className='circle'></span>
                                </div> :
                                <span className='text'>登入</span>
                        }
                    </button>
                </div>
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
