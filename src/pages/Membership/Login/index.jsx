import React, { useState } from 'react'

import SocialMedia from './SocialMedia'

import { useNavigate } from "react-router-dom"

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../../../firebase"

import "./index.scss"

export default function Login() {

    const navigate = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const savePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const savePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        // handleSignInWithEmailAndPassword()
    }

    return (
        <div className='Login' >
            <form onSubmit={handleSubmit} className="form">
                <div className='inputBox'>
                    <input onChange={savePhoneNumber} className='input' type="text" required />
                    <span className='text'>手機號碼</span>
                </div>
                <div className='alert'>
                    <p className='text'>{phoneError}</p>
                </div>
                <div className='inputBox'>
                    <input onChange={savePassword} className='input' type="text" required />
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
