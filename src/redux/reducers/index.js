import { combineReducers } from "redux";
import { authReducers } from "./auth.reducers";
import { brandReducers } from "./brand.reducers";
import { cartReducers } from "./cart.reducers";
import { categoryReducers } from "./category.reducers";
import { applyCouponReducer } from "./coupon.reducers";
import { product_reducers } from "./product.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  brands: brandReducers,
  product: product_reducers,
  auth: authReducers,
  cart: cartReducers,
  applyCoupon: applyCouponReducer,
});
export default rootReducer;
