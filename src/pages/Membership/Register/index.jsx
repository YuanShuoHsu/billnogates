import React from 'react'

import "./index.scss"

export default function Register() {
    return (
        <div className='Register'>
            <div className='name'>
                <input className='lastName' type="text" placeholder='姓氏' />
                <input className='firstName' type="text" placeholder='名稱' />
            </div>
            <div className='privacy'>
                <input className='gender' type="text" placeholder='性別' />
                <input className='birthday' type="text" placeholder='出生日期' />
            </div>
            <div className='information'>
                <input className='email' type="text" placeholder='電子郵件' />
                <input className='password' type="text" placeholder='密碼' />
            </div>
            <div className='registerContainer'>
                <button className='registerButton'>註冊</button>
            </div>
        </div>
    )
}
