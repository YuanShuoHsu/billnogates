import { configureStore } from '@reduxjs/toolkit'

import searchbarReducer from "./slice/searchbar"
import cartbarReducer from "./slice/cartbar"
import cartbarItemReducer from "./slice/cartbarItem"
import sidebarReducer from './slice/sidebar'

export const store = configureStore({
    reducer: {
        searchbar: searchbarReducer,
        cartbar: cartbarReducer,
        cartbarItem: cartbarItemReducer,
        sidebar: sidebarReducer
    },
})

export default store