import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        showSidebar: state => {
            state.value = true
        },
        hideSidebar: state => {
            state.value = false
        }
    },
})

export const { showSidebar, hideSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer