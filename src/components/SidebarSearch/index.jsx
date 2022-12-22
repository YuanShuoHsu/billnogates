import React from 'react'

import { useNavigate } from 'react-router-dom';

import { useDispatch} from 'react-redux';
import { hide_sidebar } from '../../store/slice/sidebar';

import styles from "./index.module.scss"

export default function SidebarSearch() {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();

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
    }

    return (
        <div className={styles.SidebarSearch}>
            <input onKeyUp={handleSidebarSearch} className={styles.input} placeholder="搜尋產品" type="text" />
        </div>
    )
}
