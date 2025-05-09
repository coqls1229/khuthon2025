import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainboard from "./pages/Mainboard";
import NewPost from "./pages/NewPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainboard />}></Route>
        <Route path="/newpost" element={<NewPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
