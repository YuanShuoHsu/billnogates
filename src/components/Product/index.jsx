import React from 'react'

import { Link } from "react-router-dom"

import { useSelector } from 'react-redux';

import PRODUCTS from '../../dataset/product';

import styles from "./index.module.scss"

export default function Product() {

    const pagination = useSelector(state => state.pagination.value);
    const arrangement = useSelector(state => state.arrangement.value);

    switch (arrangement) {
        case "recommend":
            PRODUCTS.sort((a, b) => (a.id - b.id))
            break
        case "priceLow":
            PRODUCTS.sort((a, b) => (a.price - b.price))
            break
        case "priceHigh":
            PRODUCTS.sort((a, b) => (b.price - a.price))
            break
        default:
    }

    const newProducts = PRODUCTS.slice((pagination - 1) * 24, pagination * 24)

    return (
        <div className={styles.Product}>
            {
                newProducts && newProducts.map(item =>
                    <Link className={styles.link} to={`detail/${item.id}`} state={{ link: true }} key={item.id}>
                        <button className={styles.card}>
                            <span className={styles.ribbon} />
                            <div className={styles.box}>
                                <img className={styles.image} src={item.image} alt={item.name} loading="lazy" />
                            </div>
                            <div className={styles.foot}>
                                <div className={styles.content}>
                                    <p className={styles.text}>{item.name}</p>
                                    <p className={styles.text}>NT.{item.price}</p>
                                </div>
                            </div>
                        </button>
                    </Link>
                )
            }
        </div>
    )
}
