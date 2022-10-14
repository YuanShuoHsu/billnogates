import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { hide_cartbar } from '../../store/slice/cartbar';

import logo from "../../images/logo.png"

import "./index.scss"

export default function Cartbar() {

    const dispatch = useDispatch();
    const cartbar = useSelector(state => state.cartbar.value);

    const hideCartbar = () => {
        dispatch(hide_cartbar())
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    const decrement = () => {
        console.log("decrement")
    }
    const increment = () => {
        console.log("increment")
    }

    return (
        <div onClick={hideCartbar} className={`cartbar ${cartbar}`}>
            <div onClick={stopPropagation} className='box'>
                <h2>您的購物車</h2>
                <div className='order'>
                    <div className='product'>
                        <div className='photo'>
                            <img className='image' src={logo} alt="logo" />
                        </div>
                        <div className='information'>
                            <h3>商品</h3>
                            <p>詳細</p>
                            <p>價格</p>
                        </div>
                    </div>
                    <div className='choose'>
                        <div className='quantity'>
                            <button onClick={decrement} className='decrement'>-</button>
                            <input className='number' type="number" defaultValue="1" min="1" max="10" />
                            <button onClick={increment} className='increment'>+</button>
                        </div>
                        <span className='price'>$100</span>
                        <svg className='trash-can' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
