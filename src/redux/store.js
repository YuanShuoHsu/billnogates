import { applyMiddleware } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducers"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export default configureStore(reducer, composeWithDevTools(applyMiddleware(thunk)))