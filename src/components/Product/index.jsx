import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { add_cartbarItem } from '../../store/slice/cartbarItem';

import PRODUCTS from "../../dataset/product"

import "./index.scss"

export default function Product() {

    const dispatch = useDispatch();
    const cartbarItem = useSelector(state => state.cartbarItem.value);

    const maxNumber = 10;

    const repeatElement = (cartbarItem, item) => {
        let counter = 0;
        cartbarItem.forEach(element => {
            if (element === item) {
                counter++
            }
        });
        return counter;
    }

    const addToCart = (item) => {
        if (repeatElement(cartbarItem, item) < maxNumber) {
            dispatch(add_cartbarItem(item))
        }
    }

    return (
        <div className='product'>
            {
                PRODUCTS && PRODUCTS.map(item => (
                    <div className='box' key={item.id}>
                        <div className='photoContainer'>
                            <img className='photo' src={item.image} alt={item.name} />
                        </div>
                        <div className='name'>{item.name}</div>
                        <div className='price'>${item.price}</div>
                        <div className='buttonGroup'>
                            <button onClick={() => addToCart(item)} className='addToCart'>
                                <svg className='heart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                                </svg>
                            </button>
                            <button onClick={() => addToCart(item)} className='addToCart'>
                                <svg className='cart-arrow-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M0 24C0 10.7 10.7 0 24 0H96c11.5 0 21.4 8.2 23.6 19.5L122 32H312V134.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V32H541.8c21.2 0 36.5 20.3 30.8 40.7l-54 192c-3.9 13.8-16.5 23.3-30.8 23.3h-317l9.1 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H160c-11.5 0-21.4-8.2-23.6-19.5L76.1 48H24C10.7 48 0 37.3 0 24zM224 464c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm240 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
