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
    <div className=" shadow-lg hover:duration-500 hover:shadow-cyan-700 m-4 flex flex-col items-center rounded-lg cursor-pointer ">
      <img className="image " src={product?.images[0]} alt="" />
      <div className="flex flex-col justify-between items-center m-4">
        <p className="text-xs text-nowrap sm:text-sm font-bold">
          {product?.title}
        </p>
        <p className="text-xs sm:text-sm mb-4">price: Rs.{product?.price}/-</p>
        <div className="">
          {cart.some((item) => item.id === product.id) ? (
            <button className="bg-cyan-600 px-2 py-1 text-white text-xs sm:text-sm border rounded font-bold">
              Added
            </button>
          ) : (
            <button
              className="transition ease-in-out delay-150 border-2 border-slate-300 font-bold  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:bg-blue-700 hover:border-0 hover:text-white text-xs sm:text-sm text-black py-1 px-2 rounded"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
