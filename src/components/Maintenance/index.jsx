import React, { useEffect } from 'react'

import "./index.scss"

export default function Maintenance() {

    useEffect(() => {
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    }, [])
    
    return (
        <div className='Maintenance'>
            <h2 className='text'>維護中</h2>
            <ul className='box'>
                <li className='dot'></li>
                <li className='dot'></li>
                <li className='dot'></li>
                <li className='dot'></li>
                <li className='dot'></li>
            </ul>
        </div>
    )
}
