import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, NotFound } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
