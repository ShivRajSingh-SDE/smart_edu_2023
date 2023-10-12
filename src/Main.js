import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import statements

import App from "./App";
import Login from "./Auth/Login";
import Signup from "./Auth/Reg";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
