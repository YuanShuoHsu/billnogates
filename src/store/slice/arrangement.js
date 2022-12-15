import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "recommend",
}

export const arrangementSlice = createSlice({
    name: 'arrangement',
    initialState,
    reducers: {
        change_arrangement: (state, data) => {
            state.value = data.payload
        },
    },
})

export const { change_arrangement } = arrangementSlice.actions

export default arrangementSlice.reducer