import React, { useState } from 'react'

import { useParams } from 'react-router-dom'

import PRODUCTS from '../../../../dataset/product'

import "./index.scss"

export default function GalleryOptions() {

  const [number, setNumber] = useState(1)

  const minNumber = 1
  const maxNumber = 10

  const { productId } = useParams()

  const findProduct = PRODUCTS.find(detailObj => (
    detailObj.id === Number(productId)
  ))

  const decrement = () => {
    if (minNumber < number) {
      setNumber(number - 1)
    }
  }

  const increment = () => {
    if (number < maxNumber) {
      setNumber(number + 1)
    }
  }

  return (
    <div className='GalleryOptions'>
      <h2>{findProduct.name}</h2>
      <h3>NT.{findProduct.price}</h3>
      <div className='content'>
        <span className='text'>顏色：</span>
        {
          findProduct.color && findProduct.color.map(item => (
            <button style={{ background: item.rgb }} className='button' key={item.subId} />
          ))
        }
      </div>
      <div className='content'>
        <span className='text'>尺寸：</span>

        {
          findProduct.dimension && findProduct.dimension.map(item => (
            <button className='button' key={item.subId}>{item.size}</button>
          ))
        }
      </div>
      <div className='count'>
        <span className='text'>數量：</span>
        <div className='number'>
          <button onClick={decrement} className='button'>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <input className='input' type="number" value={number} readOnly />
          <button onClick={increment} className='button'>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
        </div>
      </div>
      <div className='buyGroup'>
        <button className='button'>立即購買</button>
        <button className='button'>加入購物車</button>
      </div>
    </div>
  )
}
