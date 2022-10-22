import React from 'react'

import Navbar from "../Navbar"

import { useDispatch, useSelector } from 'react-redux';
import { hide_sidebar } from '../../store/slice/sidebar';

import "./index.scss"

export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar.value);

  const hideMenu = () => {
    dispatch(hide_sidebar())
  }

  return (
    <div className={`sidebar ${sidebar}`}>
      <div className='landscape'>
        <button onClick={hideMenu} className='close'>
          <svg className='xmark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </button>
      </div>
      <Navbar />
    </div>
  )
}