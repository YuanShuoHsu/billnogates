import React from 'react'

import "./index.scss"

export default function Login() {
    return (
        <div className='Login'>
            <div className='information'>
                <input className='email' type="text" placeholder='電子郵件' />
                <input className='password' type="text" placeholder='密碼' />
            </div>
            <div className='loginContainer'>
                <button className='loginButton'>登入</button>
            </div>
        </div>
    )
}
