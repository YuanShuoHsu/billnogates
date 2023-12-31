import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';

import { add_cartbarItem } from "../../../../store/slice/cartbarItem"

import styles from "./index.module.scss"

export default function GalleryOptions(props) {

  const { findResult } = props

  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [number, setNumber] = useState(1)

  const minNumber = 1
  const maxNumber = 10

  const dispatch = useDispatch();
  const cartbarItem = useSelector(state => state.cartbarItem.value);

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleColorChange = (event) => {
    const { target } = event
    setColor(target.value)
  }

  const handleSizeChange = (event) => {
    const { target } = event
    setSize(target.value)
  }

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

  const repeatElement = (cartbarItem, item) => {
    let counter = 0;
    cartbarItem.forEach(element => {
      if (JSON.stringify(element) === JSON.stringify(item)) {
        counter++
      }
    });
    return counter;
  }

  const addToCart = (item) => {
    if (repeatElement(cartbarItem, item) + number <= maxNumber) {
      for (let count = 0; count < number; count++) {
        dispatch(add_cartbarItem(item))
      }
    }
    else if (repeatElement(cartbarItem, item) + number > maxNumber) {
      for (let count = 0; count < maxNumber - repeatElement(cartbarItem, item); count++) {
        dispatch(add_cartbarItem(item))
      }
    }
  }

  const handleBuyNow = () => {
    if (color !== "" && size !== "") {
      addToCart(findResult)
      navigate("/checkout")
    }
  }

  const handleAddToCart = () => {
    if (color !== "" && size !== "") {
      const newFindResult = JSON.parse(JSON.stringify(findResult))
      newFindResult.choose = [color, size]
      addToCart(newFindResult)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.GalleryOptions}>
      <h2 className={styles.title}>{findResult.name}</h2>
      <h3 className={styles.title}>NT.{findResult.price}</h3>
      <div className={styles.content}>
        <span className={styles.text}>顏色：</span>
        {
          findResult.color && findResult.color.map(item =>
            <div className={styles.radio} key={item.subId}>
              <input onChange={handleColorChange} className={styles.input} type="radio" name="color" value={item.name} id={item.name} checked={color === item.name} required />
              <label style={{ background: item.rgb }} className={styles.label} htmlFor={item.name} />
            </div>
          )
        }
      </div>
      <div className={styles.content}>
        <span className={styles.text}>尺寸：</span>
        {
          findResult.dimension && findResult.dimension.map(item =>
            <div className={styles.radio} key={item.subId}>
              <input onChange={handleSizeChange} className={styles.input} type="radio" name="size" value={item.size} id={item.size} checked={size === item.size} required />
              <label className={styles.label} htmlFor={item.size} >{item.size}</label>
            </div>
          )
        }
      </div>
      <div className={styles.count}>
        <span className={styles.text}>數量：</span>
        <div className={styles.number}>
          <button onClick={decrement} className={styles.button}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <input className={styles.input} type="number" value={number} readOnly />
          <button onClick={increment} className={styles.button}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.buyGroup}>
        <div className={styles.content}>
          <button onClick={handleBuyNow} className={styles.button}>立即購買</button>
        </div>
        <div className={styles.content}>
          <button onClick={handleAddToCart} className={styles.button}>加入購物車</button>
        </div>
      </div>
    </form>
  )
}
