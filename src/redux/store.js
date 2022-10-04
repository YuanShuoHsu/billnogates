// import { configureStore } from "@reduxjs/toolkit"
import { createStore } from "redux"
import headerReducer from "./reducers/menu"

export default createStore(headerReducer)