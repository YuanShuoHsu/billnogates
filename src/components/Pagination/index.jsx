import React from 'react'
import "./index.scss"


export default function Pagination() {
    return (
        <ul className='Pagination'>
            <li className='page'>
                <button className='button'>
                    <div className='content'>
                        <span className='text'>Prev</span>
                    </div>
                </button>
            </li>
            <li className='pageNumber active'>
                <button className='button'>
                    <div className='content'>
                        <span className='text'>1</span>
                    </div>
                </button>
            </li>
            <li className='pageNumber'>
                <button className='button'>
                    <div className='content'>
                        <span className='text'>2</span>
                    </div>
                </button>
            </li>
            <li className='pageNumber'>
                <button className='button'>
                    <div className='content'>
                        <span className='text'>3</span>
                    </div>
                </button>
            </li>
            <li className='pageNumber'>
                <button className='button'>
                    <div className='content'>
                        <span className='text'>4</span>
                    </div>
                </button>
            </li>
            <li className='page'>
                <button className='button'>
                    <div className='content'>
                        <span className='text'>Next</span>
                    </div>
                </button>
            </li>
        </ul>
    )
}
