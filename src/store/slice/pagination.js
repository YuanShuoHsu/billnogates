import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        number_pagination: (state, data) => {
            state.value = data.payload
        },
    },
})

export const { number_pagination } = paginationSlice.actions

export default paginationSlice.reducer