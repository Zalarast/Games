import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, NotFound, PoleChudes, Saper } from "./pages";
import "./CSS/App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Saper" element={<Saper />} />
        <Route path="/PoleChudes" element={<PoleChudes />} />
      </Routes>
    </div>
  );
}

export default App;
