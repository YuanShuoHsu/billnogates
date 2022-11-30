import React, { Fragment } from 'react'

import "./index.scss"

export default function Information() {

    const VDOM = (
        <Fragment>
            <p>Hello, React</p>
            <img className='photo' src={require("./../../../../images/home/logo.png")} alt="圖片" />
        </Fragment>
    )

    return (
        <div className='Information' >
            {VDOM}
        </div>
    )
}
