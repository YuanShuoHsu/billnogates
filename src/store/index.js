import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slice/sidebar'

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
})

export default store