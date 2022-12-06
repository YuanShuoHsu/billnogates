import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        number_product: (state, data) => {
            console.log(data.payload)
            state.value = data.payload
        },
    },
})

export const { number_product } = productSlice.actions

export default productSlice.reducer