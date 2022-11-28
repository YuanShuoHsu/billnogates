import React, { Fragment } from 'react'

import "./index.scss"

export default function Information() {

    const VDOM = (
        <Fragment>
            <p>Hello, React</p>
            <img src={require("./../../../../images/home/logo.png")} alt="" />
        </Fragment>
    )

    return (
        <div className='Information' >
            {VDOM}
        </div>
    )
}
