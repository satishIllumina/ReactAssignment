import React, { useEffect, useState } from "react";

const ProductDetails = ({
  cart,
  totalPrice,
  product,
  setCart,
  setTotalPrice,
  deletedItem,
  setDeletedItem,
}) => {
  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setTotalPrice(totalPrice + product?.price);
  };
  console.log(deletedItem);
  useEffect(() => {}, [deletedItem]);

  return (
    <>
      <img className="image" src={product?.images[0]} alt="" />
      <p>{product?.title}</p>
      <p>price: {product?.price}</p>
      <div>
        {cart.some((item) => item.id === product.id) ? (
          <button style={{ backgroundColor: "aqua", color: "black" }}>
            Added
          </button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
