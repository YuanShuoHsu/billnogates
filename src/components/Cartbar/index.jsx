import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { hide_cartbar } from '../../store/slice/cartbar';

import PRODUCTS from '../../dataset/product'
import CartbarItem from '../CartbarItem';

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

    return (
        <div onClick={hideCartbar} className={`cartbar ${cartbar}`}>
            <div onClick={stopPropagation} className='box'>
                <h2 className='title'>您的購物車</h2>
                {
                    PRODUCTS && PRODUCTS.map(item => (
                        <CartbarItem item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}
