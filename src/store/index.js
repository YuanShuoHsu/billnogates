import { configureStore } from '@reduxjs/toolkit'

import searchbarReducer from "./slice/searchbar"
import cartbarReducer from "./slice/cartbar"
import sidebarReducer from './slice/sidebar'

export const store = configureStore({
    reducer: {
        searchbar: searchbarReducer,
        cartbar: cartbarReducer,
        sidebar: sidebarReducer
    },
})

export default store