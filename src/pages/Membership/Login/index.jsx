import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../../../firebase"

import google from "../../../images/google.png"
import facebook from "../../../images/facebook.png"

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

    // const handleSignInWithEmailAndPassword = () => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in
    //             // const user = userCredential.user;
    //             // if (user.emailVerified) {
    //             alert("登入成功")
    //             navigate("/")
    //             // }
    //             // else {
    //             // alert("請先驗證信箱")
    //             // handleSignOut()
    //             // }
    //             setIsLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log(auth.currentUser)
    //             setIsLoading(false)
    //             // console.log(error)
    //             const errorCode = error.code;
    //             // console.log(errorCode)
    //             // const errorMessage = error.message;
    //             // console.log(errorMessage)
    //             switch (errorCode) {
    //                 case "auth/invalid-email":
    //                     alert("信箱格式不確定")
    //                     break
    //                 case "auth/user-not-found":
    //                     alert("信箱不存在")
    //                     break
    //                 case "auth/wrong-password":
    //                     alert("密碼錯誤")
    //                     break
    //                 default:
    //             }
    //         });
    // }

    // const handleSignOut = () => {
    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //         // setCurrentUser(null)
    //     }).catch((error) => {
    //         // An error happened.
    //         // console.log(error)
    //     });
    // }

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
                <div className='others'>
                    <span className='divider'></span>
                    <p className='or'>或</p>
                    <span className='divider'></span>
                </div>
            </form>
            <div className='buttonBox'>
                <button
                    // onClick={handleGoogleSignIn}
                    className='button'>
                    <img className='brand' src={google} alt="google" />
                    <div className='textBox'>
                        <span className='text'>使用</span>
                        <span className='brandText'>google</span>
                        <span className='text'>帳號註冊</span>
                    </div>
                </button>
            </div>
            <div className='buttonBox'>
                <button
                    // onClick={handleFacebookSignIn} 
                    className='button'>
                    <img className='brand' src={facebook} alt="facebook" />
                    <div className='textBox'>
                        <span className='text'>使用</span>
                        <p className='brandText'>facebook</p>
                        <span className='text'>帳號註冊</span>
                    </div>
                </button>
            </div>
        </div>
    )
}
