import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "recommend",
  anchorPoint: null,
};

export const arrangementSlice = createSlice({
  name: "arrangement",
  initialState,
  reducers: {
    changeArrangement: (state, data) => {
      state.value = data.payload;
    },
    initialAnchorPoint: (state, data) => {
      state.anchorPoint = data.payload;
    },
  },
});

export const { changeArrangement, initialAnchorPoint } =
  arrangementSlice.actions;

export default arrangementSlice.reducer;
