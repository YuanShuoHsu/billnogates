import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "recommend",
};

export const arrangementSlice = createSlice({
  name: "arrangement",
  initialState,
  reducers: {
    changeArrangement: (state, data) => {
      state.value = data.payload;
    },
  },
});

export const { changeArrangement } = arrangementSlice.actions;

export default arrangementSlice.reducer;
