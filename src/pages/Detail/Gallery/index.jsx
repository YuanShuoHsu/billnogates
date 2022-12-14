import React from 'react'

import GalleryThumbs from './GalleryThumbs'
import GalleryOptions from './GalleryOptions'

import "./index.scss"

export default function Gallery(props) {

    const { findResult } = props
    
    return (
        <div className='Gallery'>
            <div className='box'>
                <GalleryThumbs findResult={findResult} />
            </div>
            <div className='box'>
                <GalleryOptions findResult={findResult} />
            </div>
        </div>
    )
}
