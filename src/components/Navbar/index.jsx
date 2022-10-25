import React from 'react'

import NAVS from "../../dataset/navbar"
import NavbarItem from '../NavbarItem'

import "./index.scss"

export default function Navbar() {
  return (
    <div className='Navbar'>
      <ul className='menu'>
        {
          NAVS && NAVS.map(item => (
            <NavbarItem item={item} key={item.id}/>
          ))
        }
      </ul>
    </div>
  )
}
