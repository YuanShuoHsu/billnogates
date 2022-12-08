import React, { useState, useEffect } from 'react'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase"

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
// import { show_searchbar } from "../../store/slice/searchbar"
import { show_cartbar } from "../../store/slice/cartbar"
import { show_sidebar } from '../../store/slice/sidebar'
import { position_headerButton } from '../../store/slice/headerButton'

import "./index.scss"

export default function HeaderButton() {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setCurrentUser(user)
            } else {
                // User is signed out
            }
        });
    }, [])

    const dispatch = useDispatch()
    const cartbarItem = useSelector(state => state.cartbarItem.value);

    // const showSearch = () => {
    //     dispatch(show_searchbar())
    // }

    const showCart = () => {
        dispatch(show_cartbar())

        const scrollPosition = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        dispatch(position_headerButton(scrollPosition))
    }

    const showMenu = () => {
        dispatch(show_sidebar())

        const scrollPosition = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        dispatch(position_headerButton(scrollPosition))
    }

    return (
        <div className="HeaderButton">
            {
                currentUser ?
                    <Link className='link' to="/user">
                        <button className='customer active'>
                            <svg className='user' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                            <span className='name'>{currentUser.uid.slice(0, 10)}</span>
                        </button>
                    </Link> :
                    <Link className='link' to="/membership/login">
                        <button className='customer'>
                            <svg className='user' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                        </button>
                    </Link>
            }
            <button style={{ "--x": `${cartbarItem.length}` }} onClick={showCart} className={`button cart ${cartbarItem.length === 0 ? "" : "active"}`}>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                </svg>
            </button>
            <button onClick={showMenu} className='button hamburger'>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
        </div>
    )
}
