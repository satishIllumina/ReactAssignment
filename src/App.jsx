import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CartMain from "./Cart/CartMain";
import UserProfile from "./UserProfile/UserProfile";
import Counter from "./Counter/Counter";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState("cart");
  return (
    <>
      <BrowserRouter>
        <nav className="shadow-lg">
          <Link
            onClick={() => setIsClicked("cart")}
            className={
              isClicked === "cart"
                ? "bg-cyan-500 p-2 py-1 text-white border rounded-lg font-bold"
                : "font-bold"
            }
            to="/"
          >
            Cart
          </Link>
          <Link
            onClick={() => setIsClicked("userprofile")}
            to="/userprofile"
            className={
              isClicked === "userprofile"
                ? "bg-cyan-500 p-2 py-1 text-white border rounded-lg font-bold"
                : "font-bold"
            }
          >
            User_Profile
          </Link>
          <Link
            onClick={() => setIsClicked("counter")}
            to="/counter"
            className={
              isClicked === "counter"
                ? "bg-cyan-500 p-2 py-1 text-white border rounded-lg font-bold"
                : "font-bold"
            }
          >
            Counter
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<CartMain />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
