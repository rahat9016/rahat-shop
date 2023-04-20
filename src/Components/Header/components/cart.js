import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex flex-row-reverse lg:flex-row items-center gap-3 ">
      {/* <AiOutlineHeart className="text-2xl text-white cursor-pointer hidden md:block" /> */}
      <div className="relative">
        <AiOutlineShoppingCart
          className={`text-2xl text-white cursor-pointer z-50 `}
          onClick={() => navigate("/cart")}
        />
        <p className="top-[-8px] left-3 absolute  text-white  rounded-full  p-0 bg-orange w-5 h-5 flex items-center justify-center">
          {cart.length}
        </p>
      </div>
      
    </div>
  );
};

export default Cart;
