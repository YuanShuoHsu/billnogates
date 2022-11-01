import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import "./index.scss"

export default function Register() {

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
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsLoading(false)
                // Signed in
                // console.log(userCredential)
                // const user = userCredential.user;
                // console.log(user)
                alert("註冊成功")
                navigate("/membership/login")
            })
            .catch((error) => {
                setIsLoading(false)
                // console.log(error)
                const errorCode = error.code;
                // console.log(errorCode)
                // const errorMessage = error.message;
                // console.log(errorMessage)
                switch (errorCode) {
                    case "auth/email-already-in-use":
                        alert("信箱已存在")
                        break
                    case "auth/invalid-email":
                        alert("信箱格式不正確")
                        break
                    case "auth/weak-password":
                        alert("密碼強度不足")
                        break
                    default:
                }
            });
    }

    return (
        <form className='Register' onSubmit={handleSubmit}>
            <div className='privacy'>
                <div className='grid'>
                    <input className='input' type="text" required />
                    <span className='text'>姓氏</span>
                </div>
                <div className='grid'>
                    <input className='input' type="text" required />
                    <span className='text'>名字</span>
                </div>
                <div className='grid'>
                    <select defaultValue={''} className='select' name="gender" required>
                        <option value="" disabled>性別</option>
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                    </select>
                    <span className='selectText'>性別</span>
                </div>
                <div className='grid'>
                    <input className='date' type="date" required />
                    <span className='dateText'>出生日期</span>
                </div>
            </div>
            <div className='inputBox'>
                <input onChange={saveEmail} className='input' type="text" required />
                <span className='text'>電子郵件</span>
            </div>
            <div className='inputBox'>
                <input onChange={savePassword} className='input' type="password" required />
                <span className='text'>密碼</span>
            </div>
            <div className='register'>
                <button className='button'>
                    {
                        isLoading ?
                            <span className='text'>Loading</span> :
                            <span className='text'>註冊</span>
                    }
                </button>
            </div>
        </form>
    )
}
