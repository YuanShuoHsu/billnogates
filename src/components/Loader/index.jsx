import React from 'react'

import styles from "./index.module.scss"

export default function Loader() {
    return (
        <div className={styles.loader}>
            <span className={styles.circle}></span>
            <span className={styles.circle}></span>
        </div>
    )
}
