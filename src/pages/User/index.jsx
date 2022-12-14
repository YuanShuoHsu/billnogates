import React from 'react'
import Header from "../../components/Header"

import { useNavigate } from "react-router-dom"

import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase"

import "./index.scss"

export default function User() {

    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("登出成功")
            navigate("/")
        }).catch((error) => {
            // An error happened.
            // console.log(error)
        });
    }

    return (
        <div className='User'>
            <Header />
            <div className='main'>
                <button onClick={handleSignOut}>登出</button>
            </div>
        </div>
    )
}
