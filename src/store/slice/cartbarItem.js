import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const cartbarItemSlice = createSlice({
    name: 'cartbarItem',
    initialState,
    reducers: {
        add_cartbarItem: (state, data) => {
            state.value = [...state.value, data.payload]
        },
        delete_cartbarItem: (state, data) => {
            state.value = [...data.payload]
        },
        increment_cartbarItem: (state, data) => {
            console.log(data.payload)
        }
    },
})

export const { add_cartbarItem, delete_cartbarItem, increment_cartbarItem } = cartbarItemSlice.actions

export default cartbarItemSlice.reducer