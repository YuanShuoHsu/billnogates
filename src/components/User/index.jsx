import React from 'react'

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function User() {
    return (
        <div className='user'>
            <div className='box'>
                <div className='router'>
                    <NavLink className={isActive => "login" + (!isActive ? " active" : "")} to={""} activeClassName="selected">
                        <button className='loginButton'>登入</button>
                    </NavLink>
                    <NavLink className={isActive => "register" + (!isActive ? " active" : "")} to={""} >
                        <button className='registerButton'>註冊</button>
                    </NavLink>
                </div>
                <div className='form'>
                    <div className='personal'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
