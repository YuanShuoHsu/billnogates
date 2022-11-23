import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { change_arrangement } from '../../store/slice/arrangement';

import "./index.scss"

export default function Arrangement() {

    const [select, setSelect] = useState("recommend")

    const dispatch = useDispatch();
    const arrangement = useSelector(state => state.arrangement.value);

    const handleSelectChange = (event) => {
        const { target } = event
        switch (target.value) {
            case "recommend":
                [...arrangement].sort((a, b) => (a.id - b.id))
                dispatch(change_arrangement(arrangement))
                break
            case "priceLow":
                [...arrangement].sort((a, b) => (a.price - b.price))
                dispatch(change_arrangement(arrangement))
                break
            case "priceHigh":
                [...arrangement].sort((a, b) => (b.price - a.price))
                dispatch(change_arrangement(arrangement))
                break
            default:
        }
        setSelect(target.value)
    }

    return (
        <div className='Arrangement'>
            <div className='box'>
                <span className='text'>排列方式：</span>
                <div className='content'>
                    <select value={select} onChange={handleSelectChange} className='select' name="arrangement">
                        <option value="recommend">推薦</option>
                        <option value="priceLow">價錢，從低到高</option>
                        <option value="priceHigh">價錢，從高到低</option>
                    </select>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
