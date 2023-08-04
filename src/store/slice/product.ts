import { createSlice } from "@reduxjs/toolkit";
import products from "../../dataset/products";

const initialState = {
  value: products,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    initialProducts: (state) => {
      state.value = products;
    },
    sortedByAscendingPrice: (state) => {
      state.value.sort((a, b) => {
        const minPriceA = Math.min(...Object.values(a.dimensions));
        const minPriceB = Math.min(...Object.values(b.dimensions));
        return minPriceA - minPriceB;
      });
    },
    sortedByDescendingPrice: (state) => {
      state.value.sort((a, b) => {
        const maxPriceA = Math.min(...Object.values(a.dimensions));
        const maxPriceB = Math.min(...Object.values(b.dimensions));
        return maxPriceB - maxPriceA;
      });
    },
  },
});

export const {
  initialProducts,
  sortedByAscendingPrice,
  sortedByDescendingPrice,
} = productSlice.actions;

export default productSlice.reducer;
