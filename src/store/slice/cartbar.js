import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const cartbarSlice = createSlice({
    name: 'cartbar',
    initialState,
    reducers: {
        show_cartbar: (state) => {
            state.value = "active"
        },
        hide_cartbar: (state) => {
            state.value = ""
        }
    },
})

export const { show_cartbar, hide_cartbar } = cartbarSlice.actions

export default cartbarSlice.reducer