import React from 'react'

import { Link } from "react-router-dom"

import { useSelector } from 'react-redux';

import styles from "./index.module.scss"

export default function Product(props) {

    const { PRODUCTS } = props

    const pagination = useSelector(state => state.pagination.value);
    const arrangement = useSelector(state => state.arrangement.value);

    switch (arrangement) {
        case "recommend":
            PRODUCTS.sort((a, b) => (a.id - b.id))
            break
        case "priceLow":
            PRODUCTS.forEach(product => {
                product.minPrice = Math.min(...product.dimension.map(dimension => dimension.price));
            });
            PRODUCTS.sort((a, b) => a.minPrice - b.minPrice);
            break
        case "priceHigh":
            PRODUCTS.forEach(product => {
                product.maxPrice = Math.max(...product.dimension.map(dimension => dimension.price));
            });
            PRODUCTS.sort((a, b) => b.maxPrice - a.maxPrice);
            break
        default:
    }

    const newProducts = PRODUCTS.slice((pagination - 1) * 24, pagination * 24)

    const renderPriceRange = item => {
        const prices = item.dimension.map(item => item.price);

        const maxPrice = prices.reduce((max, price) => {
            return price > max ? price : max;
        });

        const minPrice = prices.reduce((min, price) => {
            return price < min ? price : min;
        });

        if (minPrice === maxPrice) {
            return <p className={styles.text}>NT${minPrice}</p>
        } else {
            return <p className={styles.text}>NT${minPrice}～{maxPrice}</p>
        }
    }

    return (
        <div className={styles.Product}>
            {
                newProducts && newProducts.map(item =>
                    <Link className={styles.link} to={`/detail/${item.id}`} key={item.id}>
                        <button className={styles.card}>
                            <span className={styles.ribbon} />
                            <div className={styles.box}>
                                <img className={styles.image} src={item.image} alt={item.name} loading="lazy" />
                            </div>
                            <div className={styles.foot}>
                                <div className={styles.content}>
                                    <p className={styles.text}>{item.name}</p>
                                    {
                                        renderPriceRange(item)
                                    }
                                </div>
                            </div>
                        </button>
                    </Link>
                )
            }
        </div>
    )
}
