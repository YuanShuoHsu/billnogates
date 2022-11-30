import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const cartbarSlice = createSlice({
    name: 'cartbar',
    initialState,
    reducers: {
        show_cartbar: (state) => {
            state.value = true
        },
        hide_cartbar: (state) => {
            state.value = false
        }
    },
})

export const { show_cartbar, hide_cartbar } = cartbarSlice.actions

export default cartbarSlice.reducer