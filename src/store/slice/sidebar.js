import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        show_sidebar: (state) => {
            state.value = true
        },
        hide_sidebar: (state) => {
            state.value = false
        }
    },
})

export const { show_sidebar, hide_sidebar } = sidebarSlice.actions

export default sidebarSlice.reducer