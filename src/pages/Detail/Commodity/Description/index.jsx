import React from 'react'

import { useLocation, useParams } from 'react-router-dom';

import PRODUCTS from '../../../../dataset/product'

import "./index.scss"

export default function Description() {

  const { productId } = useParams()
  const { state } = useLocation();

  console.log(state)

  const findProduct = PRODUCTS.find(detailObj => (
    detailObj.id === Number(productId)
  )) || {}

  console.log(findProduct)

  return (
    <div className='Description'>
      <span>Hello</span>
      {/* {
        findProduct.description && findProduct.description.map(item => {
          if (item.text !== undefined) {
            return <p className='text' key={item.subId}>{item.text}</p>
          }
          else if (item.horizontal !== undefined) {
            return <img className='horizontal' key={item.subId} src={item.horizontal} alt={item.name} loading="lazy" />
          }
          else if (item.vertical !== undefined) {
            return <img className='vertical' key={item.subId} src={item.vertical} alt={item.name} loading="lazy" />
          }
          return item
        })
      } */}
    </div>
  )
}
