import React from "react";

import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Detailed from "./pages/Detailed";
import Checkout from "./pages/Checkout";
import Story from "./pages/Story";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="membership/*" element={<Membership />} />
        <Route path="membership" element={<Navigate replace to="/membership/login" />} />
        <Route path="detailed/*" element={<Detailed />} />
        <Route path="detailed" element={<Navigate replace to="/detailed/description" />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="story" element={<Story />} />
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </div>
  );
}