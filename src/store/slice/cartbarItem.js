import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const cartbarItemSlice = createSlice({
    name: 'cartbarItem',
    initialState,
    reducers: {
        change_cartbarItem: (state, data) => {
            state.value = [...data.payload]
        },
    },
})

export const { change_cartbarItem } = cartbarItemSlice.actions

export default cartbarItemSlice.reducer