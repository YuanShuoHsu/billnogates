import React, { useState, useEffect } from 'react'

// import { useDispatch } from 'react-redux';
// import { add_cartbarItem, delete_cartbarItem } from '../../../store/slice/cartbarItem';

import styles from "./index.module.scss"

export default function Order(props) {

    // const dispatch = useDispatch();

    const { cartbarItem, item } = props

    const [number, setNumber] = useState(1)
    // const minNumber = 1
    // const maxNumber = 10

    useEffect(() => {
        setNumber(repeatElement(cartbarItem, item))
    }, [cartbarItem, item])

    // const deleteElement = (cartbarItem, item) => {
    //     const newCartbarItem = [...cartbarItem];
    //     for (let index = newCartbarItem.length; index > 0; index--) {
    //         if (JSON.stringify(newCartbarItem[index - 1]) === JSON.stringify(item)) {
    //             newCartbarItem.splice(index - 1, 1)
    //             break
    //         }
    //     }
    //     return newCartbarItem
    // }

    const repeatElement = (cartbarItem, item) => {
        let counter = 0;
        cartbarItem.forEach(element => {
            if (JSON.stringify(element) === JSON.stringify(item)) {
                counter++
            }
        });
        return counter;
    }

    return (
        <div className={styles.Order} >
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
            <div className={styles.box}>
                <div className={styles.content}>
                    <span className={styles.text}>數量</span>
                    <span className={styles.text}>{number}</span>
                </div>
                <div className={styles.content}>
                    <span className={styles.text}>金額</span>
                    <span className={styles.text}>{item.price * number}</span>
                </div>
            </div>
        </div>
    )
}
