import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainboard from "./pages/Mainboard";
import NewPost from "./pages/NewPost";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import Purchase from "./pages/Purchase";
import Login from "./pages/Login";
import CheckGrade from "./pages/CheckGrade";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/newpost" element={<NewPost />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/checkgrade" element={<CheckGrade />}></Route>
        <Route path="/post">
          <Route path="purchase" element={<Purchase />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
