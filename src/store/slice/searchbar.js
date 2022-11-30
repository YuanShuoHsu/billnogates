import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        show_searchbar: (state) => {
            state.value = true
        },
        hide_searchbar: (state) => {
            state.value = false
        }
    },
})

export const { show_searchbar, hide_searchbar } = searchbarSlice.actions

export default searchbarSlice.reducer