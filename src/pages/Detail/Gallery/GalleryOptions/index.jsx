import React from 'react'

import { useParams } from 'react-router-dom'

import PRODUCTS from '../../../../dataset/product'

import "./index.scss"

export default function GalleryOptions() {

  const { productId } = useParams()

  const findProduct = PRODUCTS.find(detailObj => (
    detailObj.id === Number(productId)
  ))
  console.log(findProduct)
  return (
    <div className='GalleryOptions'>
      <h2>{findProduct.name}</h2>
      <h3>${findProduct.price}</h3>
      <div>
        <h4>顏色</h4>
      </div>
      <button>立即購買</button>
      <button>加入購物車</button>
    </div>
  )
}
