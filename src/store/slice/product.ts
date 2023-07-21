import { createSlice } from "@reduxjs/toolkit";
import products from "../../dataset/product";

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
        const minPriceA = Math.min(
          ...a.dimension.map((dimension) => dimension.price)
        );
        const minPriceB = Math.min(
          ...b.dimension.map((dimension) => dimension.price)
        );
        return minPriceA - minPriceB;
      });
    },
    sortedByDescendingPrice: (state) => {
      state.value.sort((a, b) => {
        const maxPriceA = Math.max(
          ...a.dimension.map((dimension) => dimension.price)
        );
        const maxPriceB = Math.max(
          ...b.dimension.map((dimension) => dimension.price)
        );
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
