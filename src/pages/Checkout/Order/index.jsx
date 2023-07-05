import React from 'react'

import styles from "./index.module.scss"

export default function Order(props) {

    const { item } = props

    return (
        <div className={styles.Order} >
            <div className={styles.main}>
                <div className={styles.box}>
                    <div className={styles.photo}>
                        <img className={styles.image} src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.information}>
                        <h3 className={styles.title}>{item.name}</h3>
                        <p className={styles.text}>{item.choose[0]}、{item.choose[1]}</p>
                        <p className={styles.text}>NT${item.price}</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <span className={styles.text}>數量</span>
                        <span className={styles.text}>{item.number}</span>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.text}>金額</span>
                        <span className={styles.text}>{item.price * item.number}</span>
                    </div>
                </div>
            </div>
            <div className={styles.gap}>
                <span className={styles.line}></span>
            </div>
        </div>
    )
}
