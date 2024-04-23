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
          <button className="bg-cyan-600 p-2 py-1 text-white border rounded-lg">
            Added
          </button>
        ) : (
          <button
            className="transition ease-in-out delay-150 border-2 border-black  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:bg-blue-700 hover:border-0 hover:text-white text-black py-1 px-2 rounded"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
