import React from 'react'

import { Link } from "react-router-dom"

import { useSelector } from 'react-redux';
// import { add_cartbarItem } from '../../store/slice/cartbarItem';

// import PRODUCTS from "../../dataset/product"

import "./index.scss"

export default function Product() {

    const pagination = useSelector(state => state.pagination.value);
    const arrangement = useSelector(state => state.arrangement.value);
    // console.log(arrangement)

    const newProducts = arrangement.slice((pagination - 1) * 24, pagination * 24)

    // const maxNumber = 10;

    // const repeatElement = (cartbarItem, item) => {
    //     let counter = 0;
    //     cartbarItem.forEach(element => {
    //         if (element === item) {
    //             counter++
    //         }
    //     });
    //     return counter;
    // }

    // const addToCart = (item) => {
    //     if (repeatElement(cartbarItem, item) < maxNumber) {
    //         dispatch(add_cartbarItem(item))
    //         dispatch(show_header())
    //     }
    // }

    const data = (item) => {
        console.log(item)
    }

    return (
        <div className='Product'>
            <div className='grid'>
                {
                    newProducts && newProducts.map(item => (
                        <Link onClick={() => data(item)} className='link' to={"/detailed/description"} key={item.id}>
                            <button className='card' >
                                <span className='ribbon'></span>
                                <div className='box'>
                                    <img className='photo' src={item.image} alt={item.name} />
                                </div>
                                <div className='content'>
                                    <div className='name'>{item.name}</div>
                                    <div className='price'>NT.{item.price}</div>
                                </div>
                            </button>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
