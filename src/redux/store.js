// import { configureStore } from "@reduxjs/toolkit"
import { createStore } from "redux"
import headerReducer from "./reducers/header"

export default createStore(headerReducer)