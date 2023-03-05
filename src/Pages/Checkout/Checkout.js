import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Address from "../../Components/Checkout/Address";
import CheckoutHeader from "../../Components/Checkout/CheckoutHeader";
import Coupon from "../../Components/Checkout/Coupon";
import DeliveryMethod from "../../Components/Checkout/DeliveryMethod";
import OrderOverview from "../../Components/Checkout/OrderOverview";
import PaymentMethod from "../../Components/Checkout/PaymentMethod";

import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCardItem, getUserCart } from "../../redux/action/cart.action";
import { applyCoupon } from "../../redux/action/coupon.action";
import { orderAction } from "../../redux/action/order.action";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  fullAddress: "",
  city: "",
  zone: "",
  number: "",
};
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(60);
  const [cartItems, setCartItems] = useState([]);
  const [values, setValues] = useState(initialState);
  const [coupon, setCoupon] = useState("");
  const [payment, setPayment] = useState("");
  const afterDiscount = useSelector((state) => state.applyCoupon.afterDiscount);
  const auth = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setDelivery(parseInt(e.target.value));
  };
  //handle discount button
  const handleDiscountButton = (e) => {
    e.preventDefault();
    if (coupon && cartItems?.cartTotal) {
      dispatch(applyCoupon(coupon, cartItems?.cartTotal));
    }
  };
  //handle user information function
  const handleUserInformation = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setValues({ ...values, ...auth.user });
  }, []);

  //Total amount after discount
  const totalAmount = cartItems?.cartTotal - afterDiscount + delivery;
  // Confirm Order
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    let orderObj = {
      products: cartItems.products,
      totalAmount: cartItems?.cartTotal,
      totalAfterDiscount: totalAmount,
      paymentIntent: payment,
      customerInformation: values,
    };
    if (cartItems.products && totalAmount && values) {
      orderAction(orderObj)
        .then((res) => {
          const orderId = res.data.orderItems._id;
          const paymentIntent = res.data.orderItems.paymentIntent;
          if (paymentIntent === "Online Payment" && orderId) {
            localStorage.setItem("payment", JSON.stringify(orderId));
          }
          if (paymentIntent === "Online Payment") {
            navigate("/payment");
          } else {
            navigate("/user/order");
          }
          if (res.status === 201) {
            dispatch(deleteCardItem());
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    getUserCart().then((res) => {
      setCartItems(res.data.cart);
    });
  }, []);
  return (
    <Layout>
      <div className={"bg-bgShop pb-20"}>
        <MenuSection />
        <div className="container mx-auto">
          <h1 className="my-6 text-2xl font-fira ">Checkout</h1>
          <form onSubmit={handleConfirmOrder}>
            <div className="flex gap-2">
              {/* Customer Information */}
              <div className="w-[25%] sm:max-w-full mb-10">
                <Address
                  handleUserInformation={handleUserInformation}
                  values={values}
                />
              </div>
              {/* Payment Method */}
              <div className="w-[75%] mb-10">
                <div className="flex flex-wrap justify-between">
                  <div className="w-[49.5%] ">
                    <CheckoutHeader number="2" title="Payment Method">
                      <PaymentMethod setPayment={setPayment} />
                    </CheckoutHeader>
                  </div>
                  {/* Delivery Method  */}
                  <div className="w-[49.5%]">
                    <CheckoutHeader number="3" title="Delivery Method">
                      <DeliveryMethod handleChange={handleChange} />
                    </CheckoutHeader>
                    <Coupon
                      handleDiscountButton={handleDiscountButton}
                      setCoupon={setCoupon}
                    />
                  </div>

                  <OrderOverview
                    cart={cartItems}
                    delivery={delivery}
                    totalAmount={totalAmount}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <button className="font-fira font-sm text-lg bg-btnBlue px-4 py-2 text-white mb-6 rounded">
                Confirm order
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
