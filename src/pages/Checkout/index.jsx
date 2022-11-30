import React, { Fragment } from 'react'

import Footer from "../../components/Footer"

import "./index.scss"

export default function Checkout() {
    return (
        <Fragment>
            <div className='Checkout'>
                <div className='privacy'>
                    <h2 className='title'>聯絡資訊</h2>
                    <div className='name'>
                        <input className='lastName' type="text" placeholder='姓氏' />
                        <input className='firstName' type="text" placeholder='名字' />
                    </div>
                    <div className='contact'>
                        <input className='email' type="text" placeholder='電子郵件' />
                        <input className='phone' type="text" placeholder='手機號碼' />
                    </div>
                </div>
                <div>
                    <h2>收件地址</h2>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className='remark'>
                    <h2 className='title'>訂單備註</h2>
                    <div className='message'>
                        <input className='comments' type="text" placeholder='留言給賣家' />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
