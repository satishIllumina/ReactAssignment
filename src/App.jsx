import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartMain from "./Cart/CartMain";
import UserProfile from "./UserProfile/UserProfile";
import Counter from "./Counter/Counter";

function App() {
  return (
    <>
      <nav>
        <a href="/cart">Cart</a>
        <a href="/userprofile">User_Profile</a>
        <a href="/counter">Counter</a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<CartMain />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
