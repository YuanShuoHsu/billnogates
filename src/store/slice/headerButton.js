import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const headerButtonSlice = createSlice({
    name: 'headerButton',
    initialState,
    reducers: {
        position_headerButton: (state, data) => {
            state.value = data.payload
        },
    },
})

export const { position_headerButton } = headerButtonSlice.actions

export default headerButtonSlice.reducer