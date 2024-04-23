import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const Cart = ({
  product,
  setCart,
  cart,
  setTotalPrice,
  totalPrice,
  setDeletedItem,
}) => {
  // console.log(cart);

  const productQuantityIncrement = () => {
    var index = cart.findIndex((item) => item.title === product.title);
    let updatedCart = [...cart];
    updatedCart[index] = {
      ...product,
      quantity: product.quantity + 1,
    };
    setCart(updatedCart);
    setTotalPrice(totalPrice + product?.price);
  };

  const productQuantityDecrement = () => {
    var index = cart.findIndex((item) => item.title === product.title);
    let updatedCart = [...cart];
    updatedCart[index] = { ...product, quantity: product.quantity - 1 };
    setCart(updatedCart);
    setTotalPrice(totalPrice - product?.price);
  };

  const productDelete = () => {
    let updatedCart = cart.filter((item) => item.title !== product.title);
    setCart(updatedCart);
    setTotalPrice(totalPrice - product?.price * product?.quantity);
    setDeletedItem(product?.id);
  };

  return (
    <>
      <div className="cartProduct shadow-lg black">
        <div className="cartItems">
          <img className="cartImage" src={product?.images[0]} alt="" />
          <p>{product.title}</p>
        </div>
        <div>
          <button
            onClick={() => product?.quantity >= 2 && productQuantityDecrement()}
            className="p-2 py-1  border-r-2 bg-gray-200 rounded-l-lg"
          >
            {product?.quantity <= 1 ? (
              <button onClick={productDelete}>
                <MdDeleteOutline />
              </button>
            ) : (
              "-"
            )}
          </button>
          <span className="p-2 py-1 border w-4">{product?.quantity}</span>
          <button
            className=" p-2 py-1 border-l-2 bg-gray-200 rounded-r-lg"
            onClick={() => productQuantityIncrement()}
          >
            +
          </button>
        </div>
        <p>Rs. {product?.quantity * product.price}/-</p>
        <button onClick={productDelete}>
          <MdDeleteOutline />
        </button>
      </div>
    </>
  );
};

export default Cart;
