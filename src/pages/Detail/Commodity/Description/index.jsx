import React from 'react'

import { useLocation } from 'react-router-dom';

import "./index.scss"

export default function Description(props) {

  const { findResult } = props

  const { state } = useLocation()
  const { link } = state

  const judgeClassName = (item) => {
    if (item.text !== undefined) {
      return <p className='text' key={item.subId}>{item.text}</p>
    }
    else if (item.horizontal !== undefined) {
      return <img className='horizontal' key={item.subId} src={item.horizontal} alt={item.name} loading="lazy" />
    }
    else if (item.vertical !== undefined) {
      return <img className='vertical' key={item.subId} src={item.vertical} alt={item.name} loading="lazy" />
    }
  }

  return (
    <div className='Description'>
      {
        link ?
          findResult.description && findResult.description.map(item => {
            return judgeClassName(item)
          }) :
          findResult.information && findResult.information.map(item => {
            return judgeClassName(item)
          })
      }
    </div>
  )
}
