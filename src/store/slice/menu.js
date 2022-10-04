import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        show_menu: (state) => {
            state.value = "active"
        },
        hide_menu: (state) => {
            state.value = ""
        }
    },
})

export const { show_menu, hide_menu } = menuSlice.actions

export default menuSlice.reducer