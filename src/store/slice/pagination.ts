import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePagination: (state, data) => {
      state.value = data.payload;
    },
  },
});

export const { changePagination } = paginationSlice.actions;

export default paginationSlice.reducer;
