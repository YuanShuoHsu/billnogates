import React from 'react'

import NAVS from "../../dataset/navbar"
import NavbarItem from '../HeaderNavItem'

import "./index.scss"

export default function HeaderNav() {
  return (
    <div className='HeaderNav'>
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
