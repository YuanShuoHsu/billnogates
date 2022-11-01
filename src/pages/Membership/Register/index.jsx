import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import "./index.scss"

export default function Register() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const saveEmail = (event) => {
        setEmail(event.target.value)
    }

    const savePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // console.log(userCredential)
                // const user = userCredential.user;
                // console.log(user)
                alert("註冊成功")
                navigate("/membership/login")
            })
            .catch((error) => {
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
                    <input className='lastName' type="text" placeholder='姓氏' required />
                </div>
                <div className='grid'>
                    <input className='firstName' type="text" placeholder='名稱' required />
                </div>
                <div className='grid'>
                    <select defaultValue={''} className='gender' name="gender" required>
                        <option value="" disabled>性別</option>
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                    </select>
                </div>
                <div className='grid'>
                    <input className='birthday' type="date" placeholder='出生日期' required />
                </div>
            </div>
            <div className='information'>
                <input onChange={saveEmail} className='email' type="text" placeholder='電子郵件' required />
                <input onChange={savePassword} className='password' type="password" placeholder='密碼' required />
            </div>
            <div className='registerContainer'>
                <button className='registerButton'>註冊</button>
            </div>
        </form>
    )
}
