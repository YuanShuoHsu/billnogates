import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const headerNavSubMenuSlice = createSlice({
    name: 'headerNavSubMenu',
    initialState,
    reducers: {
        showHeaderNavSubMenu: state => {
            state.value = true
        },
        hideHeaderNavSubMenu: state => {
            state.value = false
        }
    },
})

export const { showHeaderNavSubMenu, hideHeaderNavSubMenu } = headerNavSubMenuSlice.actions

export default headerNavSubMenuSlice.reducer