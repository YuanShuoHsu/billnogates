import React from 'react'

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { hide_sidebar } from '../../store/slice/sidebar';

import styles from "./index.module.scss"

export default function SidebarSearch() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const headerButton = useSelector(state => state.headerButton.value);

    const handleSidebarSearch = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) return
        if (target.value.trim() === "") {
            target.value = ""
            return
        }

        navigate("/find", { state: { keyWord: target.value } })
        
        target.value = ""

        dispatch(hide_sidebar())

        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('overflow');
        window.scrollTo(0, headerButton);
    }

    return (
        <div className={styles.SidebarSearch}>
            <input onKeyUp={handleSidebarSearch} className={styles.input} placeholder="搜尋商品" type="text" />
        </div>
    )
}
