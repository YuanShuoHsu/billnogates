import { configureStore } from '@reduxjs/toolkit'

import searchbarReducer from "./slice/searchbar"
import cartbarReducer from "./slice/cartbar"
import cartbarItemReducer from "./slice/cartbarItem"
import sidebarReducer from './slice/sidebar'
import headerReducer from './slice/header'
import headerNavItemReducer from './slice/headerNavItem'
import headerNavSubMenuReducer from './slice/headerNavSubMenu'
import headerButtonReducer from "./slice/headerButton"

export const store = configureStore({
    reducer: {
        searchbar: searchbarReducer,
        cartbar: cartbarReducer,
        cartbarItem: cartbarItemReducer,
        sidebar: sidebarReducer,
        header: headerReducer,
        headerNavItem: headerNavItemReducer,
        headerNavSubMenu: headerNavSubMenuReducer,
        headerButton: headerButtonReducer
    },
})

export default store