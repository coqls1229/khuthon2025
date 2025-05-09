import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainboard from "./pages/Mainboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
