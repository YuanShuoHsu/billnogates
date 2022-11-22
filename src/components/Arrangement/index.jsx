import React from 'react'
import "./index.scss"

export default function Arrangement() {
    return (
        <div className='Arrangement'>
            <div className='box'>
                <span className='text'>排列方式：</span>
                <select className='select' name="arrangement" id="select">
                    <option value="recommend">推薦</option>
                    <option value="priceLow">價錢，從低到高</option>
                    <option value="priceHigh">價錢，從高到低</option>
                </select>
                {/* <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
                </svg> */}
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
            </div>
        </div>
    )
}
