import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../../../utils/firebase"

import google from "../../../../images/membership/google.png"
import facebook from "../../../../images/membership/facebook.png"

import styles from"./index.module.scss"

export default function SocialMedia() {

    const navigate = useNavigate()

    const [googleError, setGoogleError] = useState("")
    const [facebookError, setFacebookError] = useState("")

    const handleGoogleSignIn = () => {
        googleSignIn()
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                // console.log(result, token, user)
                navigate("/")
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // console.log(error, errorCode, errorMessage, email, credential)
                setGoogleError(errorMessage)
            });
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
    }

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                // const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // const credential = FacebookAuthProvider.credentialFromResult(result);
                // const accessToken = credential.accessToken;
                // console.log(result, user, accessToken)
                navigate("/")
            })
            .catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = FacebookAuthProvider.credentialFromError(error);
                // console.log(error, errorCode, errorMessage, email, credential)
                setFacebookError(errorMessage)
            });
    }
    return (
        <div className={styles.SocialMedia}>
            <div className={styles.buttonBox}>
                <button onClick={handleGoogleSignIn} className={styles.button}>
                    <img className={styles.brand} src={google} alt="google" loading="lazy" />
                    <div className={styles.textBox}>
                        <span className={styles.text}>使用</span>
                        <span className={styles.brandText}>google</span>
                        <span className={styles.text}>帳號註冊</span>
                    </div>
                </button>
            </div>
            <div className={styles.alert}>
                <p className={styles.text}>{googleError}</p>
            </div>
            <div className={styles.buttonBox}>
                <button onClick={handleFacebookSignIn} className={styles.button}>
                    <img className={styles.brand} src={facebook} alt="facebook" loading="lazy" />
                    <div className={styles.textBox}>
                        <span className={styles.text}>使用</span>
                        <p className={styles.brandText}>facebook</p>
                        <span className={styles.text}>帳號註冊</span>
                    </div>
                </button>
            </div>
            <div className={styles.alert}>
                <p className={styles.text}>{facebookError}</p>
            </div>
        </div>
    )
}
