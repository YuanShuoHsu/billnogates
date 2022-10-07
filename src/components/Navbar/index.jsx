import React from 'react'
import { NavLink } from "react-router-dom"
import "./index.scss"

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className='menu'>
        <li className='item'>
          <NavLink className="link" to="1">1</NavLink>
        </li>
        <li className='item'>
          <NavLink className="link">2
            <svg className='caret-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </NavLink>
          <ul className='subMenu'>
            <li className='subItem'>
              <NavLink className="subLink" to="2-1">2-1</NavLink>
            </li>
            <li className='subItem'>
              <NavLink className="subLink" to="2-2">2-2</NavLink>
            </li>
            <li className='subItem'>
              <NavLink className="subLink" to="2-3">2-3</NavLink>
            </li>
          </ul>
        </li>
        <li className='item'>
          <NavLink className="link" to="3">3</NavLink>
        </li>
        <li className='item'>
          <NavLink className="link" to="4">4</NavLink>
        </li>
      </ul>
    </div>
  )
}
