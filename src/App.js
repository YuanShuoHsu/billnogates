import React from "react";
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login"

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </div>
  );
}