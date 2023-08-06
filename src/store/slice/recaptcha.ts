import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const recaptchaSlice = createSlice({
  name: "recaptcha",
  initialState,
  reducers: {
    initialRecaptcha: (state, data) => {
      state.value = data.payload;
    },
  },
});

export const { initialRecaptcha } = recaptchaSlice.actions;

export default recaptchaSlice.reducer;
