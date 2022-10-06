import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slice/sidebar'
import searchbarReducer from "./slice/searchbar"

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        searchbar: searchbarReducer,
    },
})

export default store