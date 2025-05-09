import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainboard from "./pages/Mainboard";
import NewPost from "./pages/NewPost";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainboard />}></Route>
        <Route path="/newpost" element={<NewPost />}></Route>
        <Route path="/post" element={<PostDetail />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
