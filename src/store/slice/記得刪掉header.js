import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: true,
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        show_header: (state) => {
            state.value = true
        },
        hide_header: (state) => {
            state.value = false
        }
    },
})

export const { show_header, hide_header } = headerSlice.actions

export default headerSlice.reducer