import React from "react";

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Membership from "./pages/Membership";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="membership/*" element={<Membership />} />
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </div>
  );
}