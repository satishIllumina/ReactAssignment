import { useEffect, useState } from "react";
import "./App.css";
import { GrCart } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartMain from "./CartMain";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <nav>
        <a href="/cart">Cart</a>
        <a href="/userprofile">User_Profile</a>
        <a href="/con">Counter</a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartMain />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
