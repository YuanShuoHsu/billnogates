import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const headerButtonSlice = createSlice({
    name: 'headerButton',
    initialState,
    reducers: {
        positionHeaderButton: state => {
            const scrollPosition = window.pageYOffset;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            state.value = scrollPosition
        },
    },
})

export const { positionHeaderButton } = headerButtonSlice.actions

export default headerButtonSlice.reducer