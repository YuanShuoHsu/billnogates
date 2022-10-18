import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { hide_cartbar } from '../../store/slice/cartbar';

import logo from "../../images/logo.png"

import "./index.scss"

export default function Cartbar() {

    const dispatch = useDispatch();
    const cartbar = useSelector(state => state.cartbar.value);

    const [number, setNumber] = useState(1)
    const minNumber = 1
    const maxNumber = 10

    const hideCartbar = () => {
        dispatch(hide_cartbar())
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    const decrement = () => {
        if (number > minNumber) {
            setNumber(number - 1)
        }
    }

    const increment = () => {
        if (number < maxNumber) {
            setNumber(number + 1)
        }
    }

    return (
        <div onClick={hideCartbar} className={`cartbar ${cartbar}`}>
            <div onClick={stopPropagation} className='box'>
                <h2 className='title'>您的購物車</h2>
                <div className='order'>
                    <div className='product'>
                        <div className='photo'>
                            <img className='image' src={logo} alt="logo" />
                        </div>
                        <div className='information'>
                            <h3 className='name'>好棒棒貼紙ssssssccacascascasc</h3>
                            <p className='depiction'>你很棒就能獲得一張超超超超 word</p>
                            <p className='price'>$100</p>
                        </div>
                    </div>
                    <div className='choose'>
                        <div className='quantity'>
                            <div onClick={decrement} className='decrement'>
                                <svg className='minus' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                </svg>
                            </div>
                            <input className='number' type="number" value={number} readOnly />
                            <div onClick={increment} className='increment'>
                                <svg className='plus' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                </svg>
                            </div>
                        </div>
                        <span className='total'>$100</span>
                        <div className='delete'>
                            <svg className='trash-can' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
