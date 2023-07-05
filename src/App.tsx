import React from 'react';

import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Detail from "./pages/Detail";
import Find from "./pages/Find";
import Checkout from "./pages/Checkout";
import Remittance from "./pages/Remittance";
import Story from "./pages/Story";
import User from "./pages/User";

import Maintenance from "./components/Maintenance";

function App() {

  const maintain = false;
  
  return (
    <div className="app">
    {
      maintain ?
        <Maintenance /> : null
    }
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="membership">
        <Route path="" element={<Navigate replace to="login" />} />
        <Route path="*" element={<Membership />} />
      </Route>
      <Route path="detail">
        <Route path="" element={<Navigate replace to="1" />} />
        <Route path=":productId">
          <Route path="" element={<Detail />} />
          <Route path="*" element={<Navigate replace to="" />} />
        </Route>
      </Route>
      <Route path="find">
        <Route path="" element={<Find />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Route>
      <Route path="checkout">
        <Route path="" element={<Checkout />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Route>
      <Route path="remittance"  >
        <Route path="" element={<Remittance />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Route>
      <Route path="story">
        <Route path="" element={<Story />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Route>
      <Route path="user">
        <Route path="" element={<Navigate replace to="profile" />} />
        <Route path="*" element={<User />} />
      </Route>
      <Route path="*" element={<Navigate replace to="" />} />
    </Routes>
  </div>
  );
}

export default App;
