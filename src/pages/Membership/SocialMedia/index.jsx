import React, { useState, Fragment } from 'react'

import { useNavigate } from "react-router-dom"

import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import google from "../../../images/membership/Google.svg"
import facebook from "../../../images/membership/Facebook.svg"

import styles from "./index.module.scss"
import Loader from '../../../components/Loader';

export default function SocialMedia(props) {

    const { text } = props

    const navigate = useNavigate()

    const [googleError, setGoogleError] = useState("")
    const [facebookError, setFacebookError] = useState("")
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)
    const [isFacebookLoading, setIsFacebookLoading] = useState(false)

    const handleSignIn = (event, socialMedia) => {
        event.preventDefault()

        switch (socialMedia) {
            case "google":
                setIsGoogleLoading(true)
                signInWithGoogle()
                break
            case "facebook":
                setIsFacebookLoading(true)
                signInWithFacebook()
                break
            default:
                break
        }
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                // console.log(result, token, user)
                setIsGoogleLoading(false)
                navigate("/")
            }).catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // console.log(error, errorCode, errorMessage, email, credential)
                setIsGoogleLoading(false)
                switch (errorCode) {
                    case "auth/account-exists-with-different-credential":
                        setGoogleError("帳戶存在不同的憑證")
                        break
                    case "auth/auth-domain-config-required":
                        setGoogleError("需要驗證域配置")
                        break
                    case "auth/credential-already-in-use":
                        setGoogleError("憑證已被使用")
                        break
                    case "auth/email-already-in-use":
                        setGoogleError("電子郵件已被使用")
                        break
                    case "auth/operation-not-allowed":
                        setGoogleError("不允許操作")
                        break
                    case "auth/operation-not-supported-in-this-environment":
                        setGoogleError("此環境不支持操作")
                        break
                    case "auth/timeout":
                        setGoogleError("操作超時")
                        break
                    default:
                        setGoogleError(errorCode)
                        break
                }
            });
    }

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                // The signed-in user info.
                // const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // const credential = FacebookAuthProvider.credentialFromResult(result);
                // const accessToken = credential.accessToken;
                // console.log(result, user, accessToken)
                setIsFacebookLoading(false)
                navigate("/")
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = FacebookAuthProvider.credentialFromError(error);
                // console.log(error, errorCode, errorMessage, email, credential)

                setIsFacebookLoading(false)
                switch (errorCode) {
                    case "auth/account-exists-with-different-credential":
                        setFacebookError("帳戶存在不同的憑證")
                        break
                    case "auth/auth-domain-config-required":
                        setFacebookError("需要驗證域配置")
                        break
                    case "auth/credential-already-in-use":
                        setFacebookError("憑證已被使用")
                        break
                    case "auth/email-already-in-use":
                        setFacebookError("電子郵件已被使用")
                        break
                    case "auth/operation-not-allowed":
                        setFacebookError("不允許操作")
                        break
                    case "auth/operation-not-supported-in-this-environment":
                        setFacebookError("此環境不支持操作")
                        break
                    case "auth/timeout":
                        setFacebookError("操作超時")
                        break
                    default:
                        setFacebookError(errorCode)
                        break
                }
            });
    }

    return (
        <div className={styles.SocialMedia}>
            <div className={styles.buttonBox}>
                <button onClick={event => handleSignIn(event, "google")} className={styles.button}>
                    {
                        !isGoogleLoading ?
                            <Fragment>
                                <img className={styles.brand} src={google} alt="google" loading="lazy" />
                                <div className={styles.textBox}>
                                    <span className={styles.text}>使用</span>
                                    <span className={styles.brandText}>google</span>
                                    <span className={styles.text}>帳號{text}</span>
                                </div>
                            </Fragment> :
                            <Loader />
                    }
                </button>
            </div>
            <div className={styles.alert}>
                <p className={styles.text}>{googleError}</p>
            </div>
            <div className={styles.buttonBox}>
                <button onClick={event => handleSignIn(event, "facebook")} className={styles.button}>
                    {
                        !isFacebookLoading ?
                            <Fragment>
                                <img className={styles.brand} src={facebook} alt="facebook" loading="lazy" />
                                <div className={styles.textBox}>
                                    <span className={styles.text}>使用</span>
                                    <p className={styles.brandText}>facebook</p>
                                    <span className={styles.text}>帳號{text}</span>
                                </div>
                            </Fragment> :
                            <Loader />
                    }
                </button>
            </div>
            <div className={styles.alert}>
                <p className={styles.text}>{facebookError}</p>
            </div>
        </div>
    )
}
