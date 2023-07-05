import React from 'react'

import GalleryThumbs from './GalleryThumbs'
import GalleryOptions from './GalleryOptions'

import styles from "./index.module.scss"

export default function Gallery(props) {

    const { findResult } = props

    return (
        <div className={styles.Gallery}>
            <div className={styles.box}>
                <GalleryThumbs findResult={findResult} />
            </div>
            <div className={styles.box}>
                <GalleryOptions findResult={findResult} />
            </div>
        </div>
    )
}
