import React from "react";

import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";
import Story from "./pages/Story";
import User from "./pages/User";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="membership">
          <Route path="" element={<Navigate replace to="login" />} />
          <Route path="*" element={<Membership />} />
        </Route>
        <Route path="detail" >
          <Route path="" element={<Navigate replace to="1" state={{ link: true }} />} />
          <Route path=":productId" state={{ link: true }}>
            <Route path="" element={<Detail />} />
            <Route path="*" element={<Navigate replace to="" state={{ link: true }} />} />
          </Route>
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="story" element={<Story />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Routes>
    </div>
  );
}