import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import "./index.scss"

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const saveEmail = (event) => {
        setEmail(event.target.value)
    }

    const savePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // console.log(userCredential)
                // const user = userCredential.user;
                // console.log(user)
                setIsLoading(false)
                alert("登入成功")
                navigate("/")
            })
            .catch((error) => {
                setIsLoading(false)
                // console.log(error)
                const errorCode = error.code;
                // console.log(errorCode)
                // const errorMessage = error.message;
                // console.log(errorMessage)
                switch (errorCode) {
                    case "auth/invalid-email":
                        alert("信箱格式不確定")
                        break
                    case "auth/user-not-found":
                        alert("信箱不存在")
                        break
                    case "auth/wrong-password":
                        alert("密碼錯誤")
                        break
                    default:
                }
            });
    }

    return (
        <form className='Login' onSubmit={handleSubmit}>
            <div className='inputBox'>
                <input onChange={saveEmail} className='input' type="text" required />
                <span className='text'>電子郵件</span>
            </div>
            <div className='inputBox'>
                <input onChange={savePassword} className='input' type="password" required />
                <span className='text'>密碼</span>
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
    )
}
