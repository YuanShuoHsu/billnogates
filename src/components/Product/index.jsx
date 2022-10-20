import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { add_cartbarItem } from '../../store/slice/cartbarItem';

import PRODUCTS from "../../dataset/product"

import "./index.scss"

export default function Product() {

    const dispatch = useDispatch();
    const cartbarItem = useSelector(state => state.cartbarItem.value);

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
        if (repeatElement(cartbarItem, item) < 10) {
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
                        <button onClick={() => addToCart(item)} className='addToCart'>加入購物車</button>
                    </div>
                ))
            }
        </div>
    )
}
