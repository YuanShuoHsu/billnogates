import { createSlice } from "@reduxjs/toolkit";
import products from "../../dataset/products";

const data = localStorage.getItem("CARTBAR_PRODUCTS");
const localStorageProducts = localStorage.getItem("PRODUCTS");
let parsedData = [];

if (JSON.stringify(products) === localStorageProducts) {
  parsedData = JSON.parse(data);
} else {
  localStorage.removeItem("CARTBAR_PRODUCTS");
  localStorage.removeItem("PRODUCTS");
  parsedData = [];
}

const initialState = {
  value: parsedData,
};

export const cartbarItemSlice = createSlice({
  name: "cartbarItem",
  initialState,
  reducers: {
    resetCartbarItem: (state) => {
      localStorage.removeItem("CARTBAR_PRODUCTS");
      localStorage.removeItem("PRODUCTS");
      state.value = [];
    },
    addToCartbarItem: (state, data) => {
      const {
        cartbarItem,
        foundProduct,
        selectedColor,
        selectedSize,
        number,
        maxNumber,
      } = data.payload;

      const newCartbarItem = cartbarItem.map((element) =>
        element.id === foundProduct.id &&
        element.selectedSize === selectedSize &&
        element.selectedColor === selectedColor
          ? {
              ...element,
              number: Math.min(element.number + number, maxNumber),
            }
          : element
      );

      const existingCartItem = newCartbarItem.find(
        (item) =>
          item.id === foundProduct.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (!existingCartItem) {
        newCartbarItem.push({
          ...foundProduct,
          selectedColor,
          selectedSize,
          price: foundProduct.dimensions[selectedSize],
          number,
        });
      }

      state.value = newCartbarItem;

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
      localStorage.setItem("PRODUCTS", JSON.stringify(products));
    },
    decrementCartbarItem: (
      state,
      { payload: { cartbarItem, item, minNumber } }
    ) => {
      state.value = cartbarItem.map((element) =>
        element.id === item.id &&
        element.selectedSize === item.selectedSize &&
        element.selectedColor === item.selectedColor &&
        element.number > minNumber
          ? { ...element, number: element.number - 1 }
          : element
      );

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
      localStorage.setItem("PRODUCTS", JSON.stringify(products));
    },
    incrementCartbarItem: (
      state,
      { payload: { cartbarItem, item, maxNumber } }
    ) => {
      state.value = cartbarItem.map((element) =>
        element.id === item.id &&
        element.selectedSize === item.selectedSize &&
        element.selectedColor === item.selectedColor &&
        element.number < maxNumber
          ? { ...element, number: element.number + 1 }
          : element
      );

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
      localStorage.setItem("PRODUCTS", JSON.stringify(products));
    },
    deleteCartbarItem: (state, { payload: { cartbarItem, item } }) => {
      state.value = cartbarItem.filter((element) => element !== item);

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
      localStorage.setItem("PRODUCTS", JSON.stringify(products));
    },
  },
});

export const {
  resetCartbarItem,
  addToCartbarItem,
  decrementCartbarItem,
  incrementCartbarItem,
  deleteCartbarItem,
} = cartbarItemSlice.actions;

export default cartbarItemSlice.reducer;
