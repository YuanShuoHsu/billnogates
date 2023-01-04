import { createSlice } from '@reduxjs/toolkit'

const data =
    window.localStorage.getItem("CARTBAR_PRODUCTS") !== null
        ? JSON.parse(window.localStorage.getItem("CARTBAR_PRODUCTS"))
        : []

const initialState = {
    value: data,
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