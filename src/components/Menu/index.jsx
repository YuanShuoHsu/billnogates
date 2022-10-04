import React from 'react'
import { NavLink } from "react-router-dom"
import store from "../../redux/store"
import { hide_menu } from "../../redux/actions/menu"
import "./index.scss"

export default function Menu() {
  const hideMenu = () => {
    store.dispatch(hide_menu())
  }
  return (
    <div className={`menu ${store.getState() ? "" : "active"}`}>
      <div className='xmarkContainer'>
        <svg onClick={hideMenu} className='xmark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      </div>
      <ul className='list'>
        <li className='item'>
          <NavLink className="link" to="1">1</NavLink>
        </li>
        <li className='item'>
          <NavLink className="link" to="2">2</NavLink>
        </li>
        <li className='item'>
          <NavLink className="link" to="3">3</NavLink>
        </li>
        <li className='item'>
          <NavLink className="link" to="4">4</NavLink>
        </li>
        <li className='item'>
          <NavLink className="link" to="5">5</NavLink>
        </li>
        <li className='item'>
          <NavLink className="link" to="6">6</NavLink>
        </li>
      </ul>
    </div>
  )
}
