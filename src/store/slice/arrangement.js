import { createSlice } from '@reduxjs/toolkit'

import PRODUCTS from '../../dataset/product'

const initialState = {
    value: [...PRODUCTS],
    element: null,
}

export const arrangementSlice = createSlice({
    name: 'arrangement',
    initialState,
    reducers: {
        recommend_arrangement: (state, data) => {
            state.value = [...data.payload].sort((a, b) => (a.id - b.id))
        },
        priceLow_arrangement: (state, data) => {
            state.value = [...data.payload].sort((a, b) => (a.price - b.price))
        },
        priceHigh_arrangement: (state, data) => {
            state.value = [...data.payload].sort((a, b) => (b.price - a.price))
        }
    },
})

export const { recommend_arrangement, priceLow_arrangement, priceHigh_arrangement } = arrangementSlice.actions

export default arrangementSlice.reducer