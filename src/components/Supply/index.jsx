import React from 'react'
import "./index.scss"
import IMAGES from "./../../images/home/logo.png"

export default function Supply() {
    return (
        <div className='Supply'>
            <div className='grid'>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='image' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2>Make One</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur, vero laudantium itaque minima similique enim eaque!</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='image' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2>Make Two</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur, vero laudantium itaque minima similique enim eaque!</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='image' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2>Make Three</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur, vero laudantium itaque minima similique enim eaque!</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='image' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2>Make Four</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur, vero laudantium itaque minima similique enim eaque!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
