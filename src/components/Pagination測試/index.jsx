import React, { useState } from 'react'

import "./index.scss"

import PRODUCTS from "../../dataset/product"

export default function Pagination() {

    const [number, setNumber] = useState(1)
    const numberMathCeil = Math.ceil(PRODUCTS.length / 10)

    const pageList = []
    if (numberMathCeil > 1) {
        for (let index = 0; index < numberMathCeil; index++) {
            pageList.push(
                <li key={index} className={`pageNumber ${number === index + 1 ? "active" : ""}`}>
                    <button className='button'>
                        <div className='content'>
                            <span className='text'>{index + 1}</span>
                        </div>
                    </button>
                </li>)
        }
    }

    const prev = () => {
        console.log("prev")
        setNumber(number - 1)
        console.log(number)
    }

    const next = () => {
        console.log("next")
        setNumber(number + 1)
    }

    return (
        <ul className={`Pagination ${numberMathCeil <= 1 ? "active" : ""}`}>
            <li className={`page ${number === 1 ? "active" : ""}`}>
                <button onClick={prev} className='button'>
                    <div className='content'>
                        <span className='text'>首頁</span>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
                        </svg>
                    </div>
                </button>
            </li>
            <div className='scroll'>
                {pageList}
            </div>
            <li className={`page ${number === numberMathCeil ? "active" : ""}`}>
                <button onClick={next} className='button'>
                    <div className='content'>
                        <span className='text'>最後</span>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                        </svg>
                    </div>
                </button>
            </li>
        </ul>
    )
}
