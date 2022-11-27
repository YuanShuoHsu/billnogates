import React from 'react'

import "./index.scss"

export default function Recommend(props) {
  const { id } = props
  return (
    <div className='Recommend' id={id}>
      <div className='content'>
        billnogates
        <span className='stroke'> store - </span>
        <span className='hue'> store - </span>
        billnogates
        <span className='stroke'> store - </span>
        <span className='hue'> store - </span>
        billnogates
        <span className='stroke'> store - </span>
        <span className='hue'> store - </span>
        billnogates
        <span className='stroke'> store - </span>
        <span className='hue'> store - </span>
      </div>
    </div>
  )
}
