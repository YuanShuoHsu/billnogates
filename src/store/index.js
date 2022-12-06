import { configureStore } from '@reduxjs/toolkit'

import arrangementReducer from "./slice/arrangement"
import cartbarReducer from "./slice/cartbar"
import cartbarItemReducer from "./slice/cartbarItem"
import searchbarReducer from "./slice/searchbar"
import sidebarReducer from './slice/sidebar'
import headerNavItemReducer from './slice/headerNavItem'
import headerNavSubMenuReducer from './slice/headerNavSubMenu'
import headerButtonReducer from "./slice/headerButton"
import paginationReducer from "./slice/pagination"

export const store = configureStore({
    reducer: {
        arrangement: arrangementReducer,
        cartbar: cartbarReducer,
        cartbarItem: cartbarItemReducer,
        searchbar: searchbarReducer,
        sidebar: sidebarReducer,
        headerNavItem: headerNavItemReducer,
        headerNavSubMenu: headerNavSubMenuReducer,
        headerButton: headerButtonReducer,
        pagination: paginationReducer,
    },
})

export default store