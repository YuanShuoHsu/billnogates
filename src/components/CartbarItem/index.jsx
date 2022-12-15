import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { add_cartbarItem, delete_cartbarItem } from '../../store/slice/cartbarItem';

import styles from "./index.module.scss"

export default function CartbarItem(props) {

    const dispatch = useDispatch();

    const { cartbarItem, item } = props

    const [number, setNumber] = useState(1)
    const minNumber = 1
    const maxNumber = 10

    useEffect(() => {
        setNumber(repeatElement(cartbarItem, item))
    }, [cartbarItem, item])

    const deleteElement = (cartbarItem, item) => {
        const newCartbarItem = [...cartbarItem];
        for (let index = newCartbarItem.length; index > 0; index--) {
            if (JSON.stringify(newCartbarItem[index - 1]) === JSON.stringify(item)) {
                newCartbarItem.splice(index - 1, 1)
                break
            }
        }
        return newCartbarItem
    }

    const repeatElement = (cartbarItem, item) => {
        let counter = 0;
        cartbarItem.forEach(element => {
            if (JSON.stringify(element) === JSON.stringify(item)) {
                counter++
            }
        });
        return counter;
    }

    const decrement = () => {
        if (minNumber < repeatElement(cartbarItem, item)) {
            dispatch(delete_cartbarItem(deleteElement(cartbarItem, item)))
        }
    }

    const increment = () => {
        if (repeatElement(cartbarItem, item) < maxNumber) {
            dispatch(add_cartbarItem(item))
        }
    }

    const handleDelete = (item) => {
        const newCartbarItem = cartbarItem.filter(obj =>
            JSON.stringify(obj) !== JSON.stringify(item)
        )
        dispatch(delete_cartbarItem(newCartbarItem))
    }

    return (
        <div className={styles.CartbarItem} >
            <div className={styles.order}>
                <div className={styles.box}>
                    <div className={styles.photo}>
                        <img className={styles.image} src={item.image} alt="logo" />
                    </div>
                    <div className={styles.information}>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.choose}>{item.choose[0]}、{item.choose[1]}</p>
                        <p className={styles.price}>${item.price}</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.calculator}>
                        <div onClick={decrement} className={styles.operator}>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </div>
                        <input className={styles.number} type="number" value={number} readOnly />
                        <div onClick={increment} className={styles.operator}>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </div>
                    </div>
                    <span className={styles.total}>${item.price * number}</span>
                    <div onClick={() => handleDelete(item)} className={styles.delete}>
                        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
