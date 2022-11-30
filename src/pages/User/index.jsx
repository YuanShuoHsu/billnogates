import React, { Fragment } from 'react'
import Header from "../../components/Header"

import { useNavigate } from "react-router-dom"

import { signOut } from "firebase/auth";
import { auth } from "../../firebase"

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
        <Fragment>
            <Header />
            <div className='User'>
                <button onClick={handleSignOut}>登出</button>
            </div>
        </Fragment>
    )
}
