import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./slice/search";
import cartbarReducer from "./slice/cartbar";
import cartbarItemReducer from "./slice/cartbarItem";
import sidebarReducer from "./slice/sidebar";
import headerNavItemReducer from "./slice/headerNavItem";
import headerNavSubMenuReducer from "./slice/headerNavSubMenu";
import arrangementReducer from "./slice/arrangement";
import paginationReducer from "./slice/pagination";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cartbar: cartbarReducer,
    cartbarItem: cartbarItemReducer,
    sidebar: sidebarReducer,
    headerNavItem: headerNavItemReducer,
    headerNavSubMenu: headerNavSubMenuReducer,
    arrangement: arrangementReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
