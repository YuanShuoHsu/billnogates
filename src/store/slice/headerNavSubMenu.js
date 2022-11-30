import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const headerNavSubMenuSlice = createSlice({
    name: 'headerNavSubMenu',
    initialState,
    reducers: {
        show_headerNavSubMenu: (state) => {
            state.value = true
        },
        hide_headerNavSubMenu: (state) => {
            state.value = false
        }
    },
})

export const { show_headerNavSubMenu, hide_headerNavSubMenu } = headerNavSubMenuSlice.actions

export default headerNavSubMenuSlice.reducer