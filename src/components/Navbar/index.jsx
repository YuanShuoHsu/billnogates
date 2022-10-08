import React from 'react'

import NAVS from "../../dataset/navbar"

import { NavLink } from "react-router-dom"

import "./index.scss"

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className='menu'>
        {
          NAVS && NAVS.map(item => (
            <li className='item' key={item.id}>
              <NavLink className="link" to={item.layers ? null : item.nav}>{item.nav}
                {
                  item.layers ?
                    <svg className='caret-down' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg> : null
                }
              </NavLink>
              <ul className='subMenu'>
                {
                  item.layers && item.layers.map(subItem => (
                    <li className='subItem' key={subItem.subId}>
                      <NavLink className="subLink" to={subItem.subnav}>{subItem.subnav}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
