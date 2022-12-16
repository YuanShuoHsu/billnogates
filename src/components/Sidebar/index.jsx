import React from 'react'

import SidebarNav from '../SidebarNav';

import { useDispatch, useSelector } from 'react-redux';
import { hide_sidebar } from '../../store/slice/sidebar';

import styles from "./index.module.scss"

export default function Sidebar() {

  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar.value);
  const headerButton = useSelector(state => state.headerButton.value);

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  const handleHideSidebar = () => {
    dispatch(hide_sidebar())

    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    document.body.style.removeProperty('overflow');
    window.scrollTo(0, headerButton);
  }

  return (
    <div onClick={handleHideSidebar} className={`${styles.Sidebar} ${sidebar ? `${styles.active}` : ""}`}>
      <div onClick={stopPropagation} className={styles.box}>
        <div className={styles.landscape} >
          <img src={require("../../images/sidebar/腦袋本人.svg").default} alt="腦袋本人" />
        </div>
        <div className={styles.search}>
          <input className={styles.input} placeholder="搜尋產品" type="text" />
        </div>
        <SidebarNav />
      </div>
    </div>
  )
}