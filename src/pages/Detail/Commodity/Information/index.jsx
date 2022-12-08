import React from 'react'

import { useParams } from 'react-router-dom';

import PRODUCTS from '../../../../dataset/product'

import "./index.scss"

export default function Information() {

    const { productId } = useParams()

    const findProduct = PRODUCTS.find(detailObj => (
        detailObj.id === Number(productId)
    ))

    return (
        <div className='Information' >
            {
                findProduct.information && findProduct.information.map(item => {
                    if (item.text !== undefined) {
                        return (<p className='text' key={item.subId}>{item.text}</p>)
                    }
                    else if (item.image !== undefined) {
                        return (<img className='photo' key={item.subId} src={item.image} alt={item.name} loading="lazy"/>)
                    }
                    return item
                })
            }
        </div>
    )
}
