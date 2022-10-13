import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        show_sidebar: (state) => {
            state.value = "active"
        },
        hide_sidebar: (state) => {
            state.value = ""
        }
    },
})

export const { show_sidebar, hide_sidebar } = sidebarSlice.actions

export default sidebarSlice.reducer