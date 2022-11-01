import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import "./index.scss"

export default function Login() {

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
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential)
                const user = userCredential.user;
                console.log(user)
                alert("登入成功")
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }
    return (
        <form className='Login' onSubmit={handleSubmit}>
            <div className='information'>
                <input onChange={saveEmail} className='email' type="text" placeholder='電子郵件' />
                <input onChange={savePassword} className='password' type="password" placeholder='密碼' />
            </div>
            <div className='loginContainer'>
                <button className='loginButton'>登入</button>
            </div>
        </form>
    )
}
