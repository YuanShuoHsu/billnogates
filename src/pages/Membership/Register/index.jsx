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
                <select className='gender' name="gender" required>
                    <option value="" disabled selected>性別</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                </select>
                <input className='birthday' type="date" placeholder='出生日期' required />
            </div>
            <div className='information'>
                <input className='email' type="text" placeholder='電子郵件' />
                <input className='password' type="password" placeholder='密碼' />
            </div>
            <div className='registerContainer'>
                <button className='registerButton'>註冊</button>
            </div>
        </div>
    )
}
