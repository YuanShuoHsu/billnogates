import React, { useEffect, useCallback } from 'react'

import SidebarSearch from '../SidebarSearch';
import SidebarNav from '../SidebarNav';

import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../store/slice/sidebar';

import styles from "./index.module.scss"

export default function Sidebar() {

  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar.value);
  const headerButton = useSelector(state => state.headerButton.value);

  const handleHideSidebar = useCallback(() => {
    dispatch(hideSidebar())

    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    document.body.style.removeProperty('overflow');
    window.scrollTo(0, headerButton);
  }, [dispatch, headerButton])

  useEffect(() => {
    window.matchMedia("(max-width: 768px)").addEventListener('change', event => {
      if (!event.matches) {
        handleHideSidebar()
      }
    })
  }, [handleHideSidebar])

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <div onClick={handleHideSidebar} className={`${styles.Sidebar} ${sidebar ? `${styles.active}` : ""}`}>
      <div onClick={stopPropagation} className={styles.box}>
        <div className={styles.landscape} >
          <img src={require("../../images/sidebar/腦袋本人.svg").default} alt="腦袋本人" />
        </div>
        <SidebarSearch />
        <SidebarNav />
      </div>
    </div>
  )
}