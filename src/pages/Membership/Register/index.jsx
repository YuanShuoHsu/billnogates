import React, { useState } from 'react'

// import { useNavigate } from "react-router-dom"

// import { createUserWithEmailAndPassword, RecaptchaVerifier, updateProfile, sendEmailVerification } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../../utils/firebase"

import google from "../../../images/google.png"
import facebook from "../../../images/facebook.png"

import "./index.scss"

export default function Register() {

    // const navigate = useNavigate()

    // useEffect(() => {
    //     ui.start('.firebaseui-auth-container', uiConfig);
    // }, [])

    // const [lastName, setLastName] = useState("")
    // const [firstName, setFirstName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [OTP, setOTP] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    // const saveLastName = (event) => {
    //     setLastName(event.target.value)
    // }

    // const saveFirstName = (event) => {
    //     setFirstName(event.target.value)
    // }

    const savePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const saveOTP = (event) => {
        setOTP(event.target.value)
    }


    // const saveEmail = (event) => {
    //     setEmail(event.target.value)
    // }

    // const savePassword = (event) => {
    //     setPassword(event.target.value)
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     setIsLoading(true)
    //     // handleCreateUserWithEmailAndPassword()
    // }

    // const handleCreateUserWithEmailAndPassword = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             setIsLoading(false)
    //             // Signed in
    //             // console.log(userCredential)
    //             // const user = userCredential.user;
    //             // console.log(user)


    //             // alert("註冊成功")
    //             handleUpdateProfile()
    //         })
    //         .catch((error) => {
    //             setIsLoading(false)
    //             // console.log(error)
    //             const errorCode = error.code;
    //             // console.log(errorCode)
    //             // const errorMessage = error.message;
    //             // console.log(errorMessage)
    //             switch (errorCode) {
    //                 case "auth/email-already-in-use":
    //                     alert("信箱已存在")
    //                     break
    //                 case "auth/invalid-email":
    //                     alert("信箱格式不正確")
    //                     break
    //                 case "auth/weak-password":
    //                     alert("密碼強度不足")
    //                     break
    //                 default:
    //             }
    //         });
    // }

    // const handleUpdateProfile = () => {
    //     updateProfile(auth.currentUser, {
    //         // displayName: lastName + firstName,
    //         // photoURL: "https://example.com/jane-q-user/profile.jpg"
    //         // phoneNumber: "12345"
    //     }).then(() => {
    //         // Profile updated!
    //         console.log("Profile updated!")
    //         handleSendEmailVerification()
    //     }).catch((error) => {
    //         // An error occurred
    //         console.log(error)
    //     });
    // }

    // const handleSendEmailVerification = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(() => {
    //             // Email verification sent!
    //             console.log("Email verification sent!")
    //             navigate("/membership/login")
    //         });
    // }

    const handleGoogleSignIn = () => {
        GoogleSignIn()
    }

    const GoogleSignIn = () => {
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
            <form className='form' action="">
                <div className='inputBox'>
                    <input onChange={savePhoneNumber} className='input' type="text" required />
                    <span className='text'>手機號碼</span>
                </div>
                <div className='alert'>
                    <p className='text'>{"錯誤"}</p>
                </div>
                <div className='inputBox'>
                    <input onChange={saveOTP} className='input' type="text" required />
                    <span className='text'>OTP</span>
                </div>
                <div className='alert'>
                    <p className='text'>{ }</p>
                </div>
                <div className='register'>
                    <button className='button'>
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
            <div onClick={handleGoogleSignIn} className='buttonBox'>
                <button className='button'>
                    <img className='brand' src={google} alt="google" />
                    <div className='textBox'>
                        <span className='text'>使用</span>
                        <span className='brandText'>google</span>
                        <span className='text'>帳號註冊</span>
                    </div>
                </button>
            </div>
            <div onClick={handleFacebookSignIn} className='buttonBox'>
                <button className='button'>
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
