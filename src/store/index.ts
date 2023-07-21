import { configureStore } from "@reduxjs/toolkit";

import arrangementReducer from "./slice/arrangement";
import cartbarReducer from "./slice/cartbar";
import cartbarItemReducer from "./slice/cartbarItem";
import headerNavItemReducer from "./slice/headerNavItem";
import headerNavSubMenuReducer from "./slice/headerNavSubMenu";
import paginationReducer from "./slice/pagination";
import productReducer from "./slice/product";
import searchReducer from "./slice/search";
import sidebarReducer from "./slice/sidebar";

export const store = configureStore({
  reducer: {
    arrangement: arrangementReducer,
    cartbar: cartbarReducer,
    cartbarItem: cartbarItemReducer,
    headerNavItem: headerNavItemReducer,
    headerNavSubMenu: headerNavSubMenuReducer,
    pagination: paginationReducer,
    product: productReducer,
    search: searchReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
