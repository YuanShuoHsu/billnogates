import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        show_search: (state) => {
            state.value = true
        },
        hide_search: (state) => {
            state.value = false
        }
    },
})

export const { show_search, hide_search } = searchSlice.actions

export default searchSlice.reducer