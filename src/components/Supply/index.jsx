import React from 'react'

import SERVICES from "../../dataset/supply"

import styles from "./index.module.scss"

export default function Supply() {
    return (
        <div className={styles.Supply}>
            {
                SERVICES && SERVICES.map(item =>
                    <div className={styles.card} key={item.id}>
                        <div className={styles.imgBox}>
                            <img className={styles.photo} src={item.image} alt={item.name} loading="lazy" />
                        </div>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2 className={styles.title}>{item.title}</h2>
                                <p className={styles.text}>{item.text}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
