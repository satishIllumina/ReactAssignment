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
      <div className="cartProduct">
        <div className="cartItems">
          <img className="cartImage" src={product?.images[0]} alt="" />
          <p>{product.title}</p>
        </div>
        <div className="cartItems">
          <button
            disabled={product?.quantity <= 1}
            onClick={() => productQuantityDecrement()}
          >
            -
          </button>
          <span>{product?.quantity}</span>
          <button onClick={() => productQuantityIncrement()}>+</button>
          <p>Rs. {product?.quantity * product.price}/-</p>
        </div>
        <button onClick={productDelete}>
          <MdDeleteOutline />
        </button>
      </div>
    </>
  );
};

export default Cart;
