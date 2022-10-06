import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        show_searchbar: (state) => {
            state.value = "active"
        },
        hide_searchbar: (state) => {
            state.value = ""
        }
    },
})

export const { show_searchbar, hide_searchbar } = searchbarSlice.actions

export default searchbarSlice.reducer