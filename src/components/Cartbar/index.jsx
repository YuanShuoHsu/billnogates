import React, { Fragment } from 'react'

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux';
import { hide_cartbar } from '../../store/slice/cartbar';

import CartbarItem from '../CartbarItem';

import "./index.scss"

export default function Cartbar() {

    const dispatch = useDispatch();
    const cartbar = useSelector(state => state.cartbar.value);
    const cartbarItem = useSelector(state => state.cartbarItem.value);
    const headerButton = useSelector(state => state.headerButton.value);

    const set = new Set()
    const setCartbarItem = cartbarItem.filter(item => !set.has(item.id) ? set.add(item.id) : false)

    const hideCartbar = () => {
        dispatch(hide_cartbar())

        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('overflow');
        window.scrollTo(0, headerButton);
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <div onClick={hideCartbar} className={`Cartbar ${cartbar}`}>
            <div onClick={stopPropagation} className='box'>
                <h2 className='title'>您的購物車</h2>
                {
                    setCartbarItem.length === 0 ?
                        <p className='notbuy' >目前還是空的</p> :
                        <Fragment>
                            {
                                setCartbarItem && setCartbarItem.map(item => (
                                    <CartbarItem cartbarItem={cartbarItem} item={item} key={item.id} />
                                ))
                            }
                            <Link className="checklink" to="/checkout">
                                <button className='checkout'>
                                    <span className='check'>結帳</span>
                                    <svg className='arrow-right-to-bracket' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                    </svg>
                                </button>
                            </Link>
                        </Fragment>

                }
            </div>
        </div>
    )
}
