import React from 'react'

import NAVS from "../../dataset/navbar"
import SidebarNavItem from '../SidebarNavItem'

import "./index.scss"

export default function SidebarNav() {
    return (
        <div className='SidebarNav'>
            <ul className='menu'>
                {
                    NAVS && NAVS.map(item => (
                        <SidebarNavItem item={item} key={item.id} />
                    ))
                }
            </ul>
        </div>
    )
}
