import React from 'react'
import "./index.scss"
import PRODUCTS from "../../dataset/product"

export default function Product() {
    console.log(PRODUCTS)
    return (
        <div className='product'>
            {
                PRODUCTS && PRODUCTS.map(item => (
                    <div className='box' key={item.id}>
                        <div className='photoContainer'>
                            <img className='photo' src={item.image} alt={item.name} />
                        </div>
                        <div className='name'>{item.name}</div>
                        <div className='price'>${item.price}</div>
                        <div className='addToCart'>加入購物車</div>
                    </div>
                ))
            }
        </div>
    )
}
