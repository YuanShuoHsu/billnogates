import React, { useState, Fragment } from 'react'

// import { useNavigate } from "react-router-dom"
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase"

import google from "../../../images/google.png"
import facebook from "../../../images/facebook.png"

import "./index.scss"

export default function Register() {

    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [OTP, setOTP] = useState("")
    const [OTPError, setOTPError] = useState("")
    const [OTPIsShow, setOTPIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const savePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const saveOTP = (event) => {
        const otp = event.target.value
        setOTP(otp)
        if (otp.length === 6) {
            console.log(OTP)
            // OTPConfirmationResult()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        phoneNumberSignIn()
    }

    const phoneNumberSignIn = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // console.log("callback")
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // console.log("expired-callback")
            }
        }, auth);

        const appVerifier = window.recaptchaVerifier;
        const tempPhone = "+886981140688"

        signInWithPhoneNumber(auth, tempPhone, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setOTPIsShow(true)
                setIsLoading(false)
                // console.log(confirmationResult)
            }).catch((error) => {
                // Error; SMS not sent
                setIsLoading(false)
                setPhoneError(error.message)
                // console.log(error)
            });
    }

    const OTPConfirmationResult = () => {
        const confirmationResult = window.confirmationResult
        console.log(OTP)
        confirmationResult.confirm(OTP).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(result, user)
            setIsLoading(false)
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            console.log(error)
            setOTPError(error.message)
            setIsLoading(false)
        });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(result, token, user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error, errorCode, errorMessage, email, credential)
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
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                console.log(result, user, accessToken)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(error, errorCode, errorMessage, email, credential)
            });
    }

    return (
        <div className='Register'>
            <form onSubmit={handleSubmit} className='form'>
                <div className='inputBox'>
                    <input onChange={savePhoneNumber} className='input' type="text" required />
                    <span className='text'>手機號碼</span>
                </div>
                <div className='alert'>
                    <p className='text'>{phoneError}</p>
                </div>
                {
                    OTPIsShow ?
                        <Fragment>
                            <div className='inputBox'>
                                <input onChange={saveOTP} value={OTP} className='input' type="text" required />
                                <span className='text'>OTP</span>
                            </div>
                            <div className='alert'>
                                <p className='text'>{OTPError}</p>
                            </div>
                        </Fragment>
                        : null
                }
                <div className='register'>
                    <button className='button' id='sign-in-button'>
                        {
                            isLoading ?
                                <div className="loader">
                                    <span className='circle'></span>
                                    <span className='circle'></span>
                                </div> :
                                <span className='text'>註冊</span>
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
                <button onClick={handleGoogleSignIn} className='button'>
                    <img className='brand' src={google} alt="google" />
                    <div className='textBox'>
                        <span className='text'>使用</span>
                        <span className='brandText'>google</span>
                        <span className='text'>帳號註冊</span>
                    </div>
                </button>
            </div>
            <div className='buttonBox'>
                <button onClick={handleFacebookSignIn} className='button'>
                    <img className='brand' src={facebook} alt="facebook" />
                    <div className='textBox'>
                        <span className='text'>使用</span>
                        <p className='brandText'>facebook</p>
                        <span className='text'>帳號註冊</span>
                    </div>
                </button>
            </div>
        </div>
        // <form className='Register' onSubmit={handleSubmit}>
        //     {/* <div className='privacy'>
        //         <div className='grid'>
        //             <input onChange={saveLastName} className='input' type="text" required />
        //             <span className='text'>姓氏</span>
        //         </div>
        //         <div className='grid'>
        //             <input onChange={saveFirstName} className='input' type="text" required />
        //             <span className='text'>名字</span>
        //         </div>
        //         <div className='grid'>
        //             <select defaultValue={''} className='select' name="gender" required>
        //                 <option value="" disabled>性別</option>
        //                 <option value="male">男性</option>
        //                 <option value="female">女性</option>
        //             </select>
        //             <span className='selectText'>性別</span>
        //             <div className='drop'>
        //                 <svg className='caret-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        //                     <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        //                 </svg>
        //             </div>
        //         </div>
        //         <div className='grid'>
        //             <input className='date' type="date" required />
        //             <span className='dateText'>出生日期</span>
        //         </div>
        //     </div> */}
        //     {/* <div className="firebaseui-auth-container"></div> */}
        //     {/* <div id="recaptcha-container"></div> */}
        //     <div className='buttonBox'>
        //         <button className='button'>
        //             <img className='brand' src={google} alt="google" />
        //         </button>
        //     </div>
        //     <div className='inputBox'>
        //         <input onChange={savePhoneNumber} className='input' type="text" required />
        //         <span className='text'>手機號碼</span>
        //     </div>
        //     <div className='inputBox'>
        //         <input onChange={saveOTP} className='input' type="text" required />
        //         <span className='text'>OTP</span>
        //     </div>
        //     <div className='inputBox'>
        //         <input onChange={saveEmail} className='input' type="text" required />
        //         <span className='text'>電子郵件</span>
        //     </div>
        //     <div className='inputBox'>
        //         <input onChange={savePassword} className='input' type="password" required />
        //         <span className='text'>密碼</span>
        //     </div>
        //     <div className='register'>
        //         <button className='button'>
        //             {
        //                 isLoading ?
        //                     <div className="loader">
        //                         <span className='circle'></span>
        //                         <span className='circle'></span>
        //                     </div> :
        //                     <span className='text'>註冊</span>
        //             }
        //         </button>
        //     </div>
        // </form>
    )
}
