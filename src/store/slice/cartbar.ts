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
      document.body.style.overflow = "hidden";
    },
    hideCartbar: (state) => {
      state.value = false;
      document.body.style.overflow = "auto";
    },
  },
});

export const { showCartbar, hideCartbar } = cartbarSlice.actions;

export default cartbarSlice.reducer;
