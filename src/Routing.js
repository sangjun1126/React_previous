import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ReactMusic from "./Pages/ReactMusic";
import Shopping from "./Pages/Shopping";
import DustKorea from "./Pages/DustKorea";
import DustAI from "./Pages/DustAI";
import Board from "./Pages/Board";
import Register from "./Pages/Register";

function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/ReactMusic" element={<ReactMusic />} />
          <Route path="/Shopping" element={<Shopping />} />
          <Route path="/DustKorea" element={<DustKorea />} />
          <Route path="/DustAI" element={<DustAI />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Register.js" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
