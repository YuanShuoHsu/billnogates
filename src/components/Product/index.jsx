import React from 'react'

import { Link } from "react-router-dom"

import { useSelector } from 'react-redux';

import PRODUCTS from '../../dataset/product';

import "./index.scss"

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
        <div className='Product'>
            {
                newProducts && newProducts.map(item =>
                    <Link className='link' to={`/detail/${item.id}/description`} key={item.id}>
                        <button className='card'>
                            <span className='ribbon'></span>
                            <div className='box'>
                                <img className='image' src={item.image} alt={item.name} loading="lazy" />
                            </div>
                            <div className='foot'>
                                <div className='content'>
                                    <p className='text'>{item.name}</p>
                                    <p className='text'>NT.{item.price}</p>
                                </div>
                            </div>
                        </button>
                    </Link>
                )
            }
        </div>
    )
}
