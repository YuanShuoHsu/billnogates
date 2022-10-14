import React from 'react'
import "./index.scss"

import { useDispatch, useSelector } from 'react-redux';
import { hide_cartbar } from '../../store/slice/cartbar';

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
            </div>
        </div>
    )
}
