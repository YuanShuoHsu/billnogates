import React, { useState } from 'react'
import "./index.scss"

import { useDispatch, useSelector } from 'react-redux';
import { hide_searchbar } from '../../store/slice/searchbar';

export default function Searchbar() {

    const dispatch = useDispatch();
    const searchbar = useSelector(state => state.searchbar.value);

    const [, setSearch] = useState("")

    const hideSearchbar = () => {
        dispatch(hide_searchbar())
    }

    const saveSearch = (event) => {
        setSearch(event.target.value)
        // console.log(search)
    }

    const handleKeyUp = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) return
        if (target.value.trim() === "") return
        // console.log(target.value)
        target.value = ""
        // console.log(target.value)
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <div onClick={hideSearchbar} className={`Searchbar ${searchbar ? "active" : ""}`}>
            <div onClick={stopPropagation} className='box'>
                <label className='searchLabel' htmlFor="search">
                    <div className='search'>
                        <svg className='magnifying-glass' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                        </svg>
                    </div>
                </label>
                <input onKeyUp={handleKeyUp} onChange={saveSearch} className='find' id="search" placeholder='找商品' type="text" />
            </div>
        </div>
    )
}
