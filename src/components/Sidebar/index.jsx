import React from 'react'

import Navbar from "../Navbar"

import { useDispatch, useSelector } from 'react-redux';
import { hide_sidebar } from '../../store/slice/sidebar';

import "./index.scss"

export default function Sidebar() {

  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar.value);

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  const hideMenu = () => {
    dispatch(hide_sidebar())
  }

  return (
    <div onClick={hideMenu} className={`sidebar ${sidebar}`}>
      <div onClick={stopPropagation} className='box'>
        <div className='landscape'></div>
        <Navbar />
      </div>
    </div>
  )
}