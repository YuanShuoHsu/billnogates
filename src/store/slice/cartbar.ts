import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const cartbarSlice = createSlice({
  name: "cartbar",
  initialState,
  reducers: {
    showCartbar: (state) => {
      state.value = true;
    },
    hideCartbar: (state) => {
      state.value = false;
    },
  },
});

export const { showCartbar, hideCartbar } = cartbarSlice.actions;

export default cartbarSlice.reducer;
