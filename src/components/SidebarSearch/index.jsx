import React from 'react'

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../store/slice/sidebar';

import styles from "./index.module.scss"
import { useState } from 'react';

export default function SidebarSearch() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const headerButton = useSelector(state => state.headerButton.value);

    const handleHideSidebar = () => {
        dispatch(hideSidebar())

        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('overflow');
        window.scrollTo(0, headerButton);
    }

    const [isOnComposition, setIsOnComposition] = useState(false)

    const handleComposition = (event) => {
        const { type } = event
        if (type === 'compositionend') {
            setIsOnComposition(false)
        }
        else {
            setIsOnComposition(true)
        }
    }

    const handleSidebarSearch = (event) => {
        const { keyCode, target } = event
        if (!isOnComposition) {
            if (keyCode !== 13) return
            if (target.value.trim() === "") {
                target.value = ""
                return
            }

            navigate("/find", { state: { keyWord: target.value } })

            target.value = ""

            handleHideSidebar()
        }
    }

    return (
        <div className={styles.SidebarSearch}>
            <input
                onCompositionStart={handleComposition}
                onCompositionEnd={handleComposition}
                onKeyDown={handleSidebarSearch}
                className={styles.input} placeholder="搜尋商品" type="text" maxLength={25} />
        </div>
    )
}
