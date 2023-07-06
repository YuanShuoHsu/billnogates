import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.value = true;
      document.body.style.overflow = "hidden";
    },
    hideSidebar: (state) => {
      state.value = false;
      document.body.style.overflow = "auto";
    },
  },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
