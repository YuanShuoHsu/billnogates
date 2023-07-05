import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}

export const headerNavItemSlice = createSlice({
    name: 'headerNavItem',
    initialState,
    reducers: {
        changeHeaderNavItem: (state, data) => {
            state.value = data.payload
        }
    },
})

export const { changeHeaderNavItem } = headerNavItemSlice.actions

export default headerNavItemSlice.reducer