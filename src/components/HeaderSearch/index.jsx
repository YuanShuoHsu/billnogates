import React from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch} from 'react-redux'

import { hideSearch} from "../../store/slice/search"

import styles from "./index.module.scss"

export default function HeaderSearch() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleHeaderSearch = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) return
        if (target.value.trim() === "") {
            target.value = ""
            return
        }

        navigate("/find", { state: { keyWord: target.value } })
        
        target.value = ""
        
        dispatch(hideSearch())
    }

    return (
        <div className={styles.HeaderSearch}>
            <input onKeyUp={handleHeaderSearch} className={styles.input} placeholder="搜尋商品" type="text" />
        </div>
    )
}
