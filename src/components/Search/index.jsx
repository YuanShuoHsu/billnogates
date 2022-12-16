import React from 'react'

import styles from "./index.module.scss"

export default function Search() {

    return (
        <div className={styles.Search}>
            <input className={styles.input} placeholder="搜尋產品" type="text" />
        </div>
    )
}
