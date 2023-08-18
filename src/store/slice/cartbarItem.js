import { createSlice } from "@reduxjs/toolkit";
import products from "../../dataset/products";

const data = localStorage.getItem("CARTBAR_PRODUCTS");
const localStorageProducts = localStorage.getItem("PRODUCTS");
let parsedData = [];

if (JSON.stringify(products) === localStorageProducts) {
  parsedData = JSON.parse(data);
} else {
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

      const newCartbarItem = JSON.parse(JSON.stringify(cartbarItem));
      const newFoundProduct = JSON.parse(JSON.stringify(foundProduct));

      newFoundProduct.selectedColor = selectedColor;
      newFoundProduct.selectedSize = selectedSize;
      newFoundProduct.price = newFoundProduct.dimensions[selectedSize];

      const findNewCartbarItem = newCartbarItem.find(
        (item) =>
          item.id === newFoundProduct.id &&
          item.selectedSize === newFoundProduct.selectedSize &&
          item.selectedColor === newFoundProduct.selectedColor
      );

      if (!findNewCartbarItem) {
        newFoundProduct.number = number;
        state.value = [newFoundProduct, ...newCartbarItem];
      } else {
        if (findNewCartbarItem.number + number <= maxNumber) {
          findNewCartbarItem.number += number;
        } else if (findNewCartbarItem.number + number > maxNumber) {
          findNewCartbarItem.number += maxNumber - findNewCartbarItem.number;
        }
        state.value = [...newCartbarItem];
      }

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
      localStorage.setItem("PRODUCTS", JSON.stringify(products));
    },
    decrementCartbarItem: (state, data) => {
      const { cartbarItem, item, minNumber } = data.payload;

      const newCartbarItem = JSON.parse(JSON.stringify(cartbarItem));

      const findNewCartbarItem = newCartbarItem.find(
        (element) =>
          element.id === item.id &&
          element.selectedSize === item.selectedSize &&
          element.selectedColor === item.selectedColor
      );

      if (findNewCartbarItem.number > minNumber) {
        findNewCartbarItem.number -= 1;
        state.value = [...newCartbarItem];
      }

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
      localStorage.setItem("PRODUCTS", JSON.stringify(products));
    },
    incrementCartbarItem: (state, data) => {
      const { cartbarItem, item, maxNumber } = data.payload;

      const newCartbarItem = JSON.parse(JSON.stringify(cartbarItem));

      const findNewCartbarItem = newCartbarItem.find(
        (element) =>
          element.id === item.id &&
          element.selectedSize === item.selectedSize &&
          element.selectedColor === item.selectedColor
      );

      if (findNewCartbarItem.number < maxNumber) {
        findNewCartbarItem.number += 1;
        state.value = [...newCartbarItem];
      }

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
      localStorage.setItem("PRODUCTS", JSON.stringify(products));
    },
    deleteCartbarItem: (state, data) => {
      const { cartbarItem, item } = data.payload;

      const newCartbarItem = cartbarItem.filter((obj) => obj !== item);
      state.value = [...newCartbarItem];

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
