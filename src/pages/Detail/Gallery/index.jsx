import React from 'react'

import GalleryThumbs from './GalleryThumbs'
import GalleryOptions from './GalleryOptions'

import "./index.scss"

export default function Gallery() {

    console.log("gallery")
    
    return (
        <div className='Gallery'>
            <div className='box'>
                <GalleryThumbs />
            </div>
            <div className='box'>
                <GalleryOptions />
            </div>
        </div>
    )
}
