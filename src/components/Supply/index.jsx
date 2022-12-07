import React from 'react'
import "./index.scss"
import IMAGES from "./../../images/home/logo.png"

export default function Supply() {
    return (
        <div className='Supply'>
            <div className='grid'>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='photo' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2 className='title'>老師教我做</h2>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur!</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='photo' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2 className='title'>回家自己做</h2>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur!</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='photo' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2 className='title'>現場擺攤日</h2>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur!</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img className='photo' src={IMAGES} alt="logo" />
                    </div>
                    <div className='box'>
                        <div className='content'>
                            <h2 className='title'>客製化服務</h2>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore cum consequuntur!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
