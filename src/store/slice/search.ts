import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearch: (state) => {
      state.value = true;
    },
    hideSearch: (state) => {
      state.value = false;
    },
  },
});

export const { showSearch, hideSearch } = searchSlice.actions;

export default searchSlice.reducer;
