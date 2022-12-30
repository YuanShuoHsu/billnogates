import React, { Fragment } from 'react'

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux';
import { hide_cartbar } from '../../store/slice/cartbar';

import CartbarItem from '../CartbarItem';

import styles from "./index.module.scss"

export default function Cartbar() {

    const dispatch = useDispatch();
    const cartbar = useSelector(state => state.cartbar.value);
    const cartbarItem = useSelector(state => state.cartbarItem.value);
    const headerButton = useSelector(state => state.headerButton.value);

    const setCartbarItem = [
        ...new Set(
            cartbarItem.map(item =>
                JSON.stringify(item)
            )
        )
    ].map(item => JSON.parse(item));

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

    const handleHideCartbar = () => {
        dispatch(hide_cartbar())

        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('overflow');
        window.scrollTo(0, headerButton);
    }

    const renderTotal = () => {
        let sum = 0
        cartbarItem && cartbarItem.forEach(item =>
            sum += item.price
        )
        return sum
    }
    console.log(setCartbarItem)

    return (
        <div onClick={hideCartbar} className={`${styles.Cartbar} ${cartbar ? `${styles.active}` : ""}`}>
            <div onClick={stopPropagation} className={styles.box}>
                <h2 className={styles.title}>您的購物車</h2>
                {
                    setCartbarItem.length === 0 ?
                        <p className={styles.p} >目前還是空的</p> :
                        <Fragment>
                            <div className={styles.content}>
                                {
                                    setCartbarItem && setCartbarItem.map(item =>
                                        <CartbarItem cartbarItem={cartbarItem} item={item} key={`${item.id} ${item.choose}`} />
                                    )
                                }
                            </div>
                            <div className={styles.item}>
                                    <div className={styles.total}>
                                        <span className={styles.text}>
                                            合計：NT.
                                            {
                                                renderTotal()
                                            }
                                        </span>
                                    </div>
                                </div>
                            <Link className={styles.link} to="/checkout">
                                <button onClick={handleHideCartbar} className={styles.button}>
                                    <span className={styles.text}>結帳</span>
                                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
