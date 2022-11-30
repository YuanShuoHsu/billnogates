import React from 'react'

import SidebarNav from '../SidebarNav';

import { useDispatch, useSelector } from 'react-redux';
import { hide_sidebar } from '../../store/slice/sidebar';

import "./index.scss"

export default function Sidebar() {

  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar.value);
  const headerButton = useSelector(state => state.headerButton.value);

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  const hideMenu = () => {
    dispatch(hide_sidebar())

    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    document.body.style.removeProperty('overflow');
    window.scrollTo(0, headerButton);
  }

  return (
    <div onClick={hideMenu} className={`Sidebar ${sidebar ? "active" : ""}`}>
      <div onClick={stopPropagation} className='box'>
        <div className='landscape'></div>
        <SidebarNav />
      </div>
    </div>
  )
}