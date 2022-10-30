import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}

export const headerNavItemSlice = createSlice({
    name: 'headerNavItem',
    initialState,
    reducers: {
        change_headerNavItem: (state, data) => {
            state.value = data.payload
        }
    },
})

export const { change_headerNavItem } = headerNavItemSlice.actions

export default headerNavItemSlice.reducer