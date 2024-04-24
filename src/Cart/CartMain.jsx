import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { GrCart } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

function CartMain() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loader, setLoader] = useState(true);
  const [deletedItem, setDeletedItem] = useState("");

  console.log(deletedItem);

  const callApi = async () => {
    setLoader(true);
    try {
      const call = await axios("https://dummyjson.com/products");
      setProducts(call.data.products);
      console.log(call.data.products);
      setLoader(false);
    } catch (error) {
      setLoader(true);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="carting">
        <div style={{ position: "relative", cursor: "pointer" }}>
          <p className="count">{cart?.length}</p>
          <button onClick={() => setCartOpen(!cartOpen)}>
            {cartOpen ? <FaShoppingCart /> : <GrCart />}
          </button>
        </div>
      </div>
      {cartOpen && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="cart">
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            {cart?.map((product) => (
              <div key={product.id}>
                <Cart
                  setDeletedItem={setDeletedItem}
                  cart={cart}
                  setCart={setCart}
                  product={product}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              </div>
            ))}
            <h2
              className="text-stone-500"
              style={{ textAlign: "center", padding: "1rem" }}
            >
              Total Price : Rs. {totalPrice}/-
            </h2>
          </div>
        </div>
      )}
      {loader ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <div>
          <h1 className="text-2xl text-center font-bold ">Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center">
            {products?.map((product) => (
              <div
                className="shadow-lg black product hover:shadow-cyan-300"
                key={product.id}
              >
                <ProductDetails
                  deletedItem={deletedItem}
                  setDeletedItem={setDeletedItem}
                  cart={cart}
                  totalPrice={totalPrice}
                  product={product}
                  setCart={setCart}
                  setTotalPrice={setTotalPrice}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CartMain;
