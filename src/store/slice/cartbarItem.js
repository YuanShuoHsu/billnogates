import { createSlice } from "@reduxjs/toolkit";

const data =
  localStorage.getItem("CARTBAR_PRODUCTS") !== null
    ? JSON.parse(localStorage.getItem("CARTBAR_PRODUCTS"))
    : [];

const initialState = {
  value: data,
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
      const { cartbarItem, findResult, color, size, number, maxNumber } =
        data.payload;

      const newCartbarItem = JSON.parse(JSON.stringify(cartbarItem));
      const newFindResult = JSON.parse(JSON.stringify(findResult));
      newFindResult.choose = [color, size];

      const foundDimension = newFindResult.dimension.find(
        (item) => item.size === size
      );
      if (foundDimension) {
        newFindResult.price = foundDimension.price;
      }

      delete newFindResult.gallery;
      delete newFindResult.dimension;
      delete newFindResult.color;
      delete newFindResult.description;
      delete newFindResult.information;

      const findNewCartbarItem = newCartbarItem.find(
        (item) =>
          item.id === newFindResult.id &&
          JSON.stringify(item.choose) === JSON.stringify(newFindResult.choose)
      );

      if (!findNewCartbarItem) {
        newFindResult.number = number;
        state.value = [newFindResult, ...newCartbarItem];
      } else {
        if (findNewCartbarItem.number + number <= maxNumber) {
          findNewCartbarItem.number += number;
        } else if (findNewCartbarItem.number + number > maxNumber) {
          findNewCartbarItem.number += maxNumber - findNewCartbarItem.number;
        }
        state.value = [...newCartbarItem];
      }

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
    },
    decrementCartbarItem: (state, data) => {
      const { cartbarItem, item, minNumber } = data.payload;

      const newCartbarItem = JSON.parse(JSON.stringify(cartbarItem));

      const findNewCartbarItem = newCartbarItem.find(
        (element) =>
          element.id === item.id &&
          JSON.stringify(element.choose) === JSON.stringify(item.choose)
      );

      if (findNewCartbarItem.number > minNumber) {
        findNewCartbarItem.number -= 1;
        state.value = [...newCartbarItem];
      }

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
    },
    incrementCartbarItem: (state, data) => {
      const { cartbarItem, item, maxNumber } = data.payload;

      const newCartbarItem = JSON.parse(JSON.stringify(cartbarItem));

      const findNewCartbarItem = newCartbarItem.find(
        (obj) =>
          obj.id === item.id &&
          JSON.stringify(obj.choose) === JSON.stringify(item.choose)
      );

      if (findNewCartbarItem.number < maxNumber) {
        findNewCartbarItem.number += 1;
        state.value = [...newCartbarItem];
      }

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
    },
    deleteCartbarItem: (state, data) => {
      const { cartbarItem, item } = data.payload;

      const newCartbarItem = cartbarItem.filter(
        (obj) => JSON.stringify(obj) !== JSON.stringify(item)
      );
      state.value = [...newCartbarItem];

      localStorage.setItem("CARTBAR_PRODUCTS", JSON.stringify(state.value));
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
