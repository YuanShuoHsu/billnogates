import React, { useEffect, useRef } from 'react'

import SidebarScroll from '../SidebarScroll';

import { useSelector } from 'react-redux';

import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'

import "./index.scss"

export default function Sidebar() {

  const sidebar = useSelector(state => state.sidebar.value);

  const scrollWrapper = useRef()

  useEffect(() => {
    newBetterScroll()
  })

  const newBetterScroll = () => {
    BScroll.use(MouseWheel)
    let bs = new BScroll(scrollWrapper.current, {
      probeType: 3,
      mouseWheel: true,
    })
    setInterval(() => {
      bs.refresh()
    }, 2000)
  }

  return (
    <div ref={scrollWrapper} className={`sidebar ${sidebar}`}>
      <SidebarScroll />
    </div>
  )
}
