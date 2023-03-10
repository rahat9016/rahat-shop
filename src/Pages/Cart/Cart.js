import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartProductItem from "../../Components/CartProductItem/CartProductItem";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import ShoppingCartEmpty from "../../Components/ShoppingCartEmpty/ShoppingCartEmpty";
import { userCart } from "../../redux/action/cart.action";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartItems);
  const auth = useSelector((state) => state.auth);

  const getTotal = () => {
    return cart.reduce((currentValue, NextValue) => {
      return currentValue + NextValue.quantity * NextValue.price;
    }, 0);
  };
  const saveOrderDB = () => {
    if (auth.authenticate && auth.authenticate) {
      userCart(cart).then((res) => {
        if (res.status === 201) {
          navigate("/checkout");
        }
      });
    } else {
      navigate("/account/login");
    }
  };

  return (
    <Layout>
      <div className="bg-bgShop pb-20">
        <MenuSection />
        <div className="pt-20">
          {cart.length > 0 ? (
            <div className="max-w-7xl mx-auto  bg-white rounded-sm p-4">
              <h1 className="text-2xl font-fira">Shopping Cart</h1>
              <div>
                <ul className="flex flex-row mt-4">
                  <li className="basis-1/4 hidden lg:block bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                    Image
                  </li>
                  <li className="basis-1/2 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                    Product Name
                  </li>
                  <li className="basis-1/2 hidden lg:block bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                    Model
                  </li>
                  <li className="basis-1/4 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                    Quantity
                  </li>

                  <li className="basis-1/4 hidden lg:block bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                    Unit Price
                  </li>
                  <li className="basis-1/4 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                    Total
                  </li>
                </ul>
              </div>
              <div>
                {cart.length > 0
                  ? cart.map((cartItem, index) => (
                      <CartProductItem cartItem={cartItem} key={index} />
                    ))
                  : null}
              </div>
              <div className="flex justify-end ">
                <h1 className="my-10 border-b border-lightGray pb-5 text-xl  ">
                  Total :-{" "}
                  <span className="text-orange font-semibold">
                    {getTotal()}
                  </span>
                </h1>
              </div>
              <div className="flex justify-between	">
                {" "}
                <button
                  className="font-fira font-sm text-lg bg-btnBlue px-4 py-2 text-white mb-6 rounded"
                  onClick={() => navigate("/")}
                >
                  Continue Shopping
                </button>
                <br />
                <button
                  className="font-fira font-sm text-lg bg-btnBlue px-4 py-2 text-white mb-6 rounded"
                  onClick={saveOrderDB}
                >
                  Place to Checkout
                </button>
              </div>
            </div>
          ) : (
            <ShoppingCartEmpty />
          )}
        </div>
      </div>
    </Layout>
  );
};
// ShoppingCartEmpty

export default Cart;
