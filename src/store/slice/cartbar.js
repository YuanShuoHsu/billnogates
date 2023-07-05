import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const cartbarSlice = createSlice({
    name: 'cartbar',
    initialState,
    reducers: {
        showCartbar: state => {
            state.value = true
        },
        hideCartbar: (state, data) => {
            document.body.style.removeProperty('position');
            document.body.style.removeProperty('top');
            document.body.style.removeProperty('width');
            document.body.style.removeProperty('overflow');
            window.scrollTo(0, data.payload);
            
            state.value = false
        }
    },
})

export const { showCartbar, hideCartbar } = cartbarSlice.actions

export default cartbarSlice.reducer