import { configureStore } from '@reduxjs/toolkit'

import searchbarReducer from "./slice/searchbar"
import cartbarReducer from "./slice/cartbar"
import cartbarItemReducer from "./slice/cartbarItem"
import sidebarReducer from './slice/sidebar'
import headerReducer from './slice/header'

export const store = configureStore({
    reducer: {
        searchbar: searchbarReducer,
        cartbar: cartbarReducer,
        cartbarItem: cartbarItemReducer,
        sidebar: sidebarReducer,
        header: headerReducer
    },
})

export default store