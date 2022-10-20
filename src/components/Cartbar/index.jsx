import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { hide_cartbar } from '../../store/slice/cartbar';

import CartbarItem from '../CartbarItem';

import "./index.scss"

export default function Cartbar() {

    const dispatch = useDispatch();
    const cartbar = useSelector(state => state.cartbar.value);
    const cartbarItem = useSelector(state => state.cartbarItem.value);

    const set = new Set()
    const setCartbarItem = cartbarItem.filter(item => !set.has(item.id) ? set.add(item.id) : false)

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
                    setCartbarItem && setCartbarItem.map(item => (
                        < CartbarItem cartbarItem={cartbarItem} setCartbarItem={setCartbarItem} item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}
