import {
  bestSellingConstance,
  getAllProducts,
  getProductById,
  getRelatedProduct,
  productBySearch,
  productReviewAction,
} from "./constnace";
import axios from "../../helpers/axios";

export const getAllProductsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: getAllProducts.GET_ALL_PRODUCTS_REQUEST,
      });
      const res = await axios.get(`/products`);
      if (res.status === 200) {
        dispatch({
          type: getAllProducts.GET_ALL_PRODUCTS_SUCCESS,
          payload: {
            products: res.data.products,
          },
        });
      }
    } catch (error) {}
  };
};

export const findProductById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: getProductById.GET_PRODUCT_BY_ID_REQUEST,
      });
      const res = await axios.get(`/product/${id}`);
      if (res.status === 200) {
        dispatch({
          type: getProductById.GET_PRODUCT_BY_ID_SUCCESS,
          payload: {
            product: res.data.product,
          },
        });
      }
    } catch (error) {}
  };
};

export const getRelatedProductById = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: getRelatedProduct.GET_RELATED_PRODUCT_REQUEST,
      });
      const res = await axios.get(`/product/related/${productId}`);
      if (res.status === 200) {
        dispatch({
          type: getRelatedProduct.GET_RELATED_PRODUCT_SUCCESS,
          payload: {
            products: res.data,
          },
        });
      }
    } catch (error) {}
  };
};
export const productStar = (productId, star) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: productReviewAction.PRODUCT_REVIEW_REQUEST,
      });
      await axios.put(`/product/start/${productId}`, { star }).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: productReviewAction.PRODUCT_REVIEW_SUCCESS,
            payload: {
              statuscode: res.status,
              ratingUpdated: res.data.ratingUpdated,
            },
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// search product by query
export const searchProductBySearch = (query) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: productBySearch.SEARCH_PRODUCT_REQUEST,
      });
      await axios.post(`/search`, query).then((res) => {
        dispatch({
          type: productBySearch.SEARCH_PRODUCT_SUCCESS,
          payload: {
            search: res.data.products,
          },
        });
      });
    } catch (error) {}
  };
};
// get products multiple filed [category id, color, price range, brand, shipping]
export const filterProducts = (value) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: getAllProducts.GET_PRODUCTS_BY_CATEGORY_ID_REQUEST,
      });
      const res = await axios.post(`/filter/products`, value);
      console.log(res.data);
      if (res.status === 200) {
        dispatch({
          type: getAllProducts.GET_PRODUCTS_BY_CATEGORY_ID_SUCCESS,
          payload: {
            products: res.data.products,
          },
        });
      }
    } catch (error) {}
  };
};
// best selling products
export const bestSellingProducts = (arg) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: bestSellingConstance.GET_BEST_SELLING_PRODUCTS_REQUEST,
      });
      await axios.post("/bestSelling", arg).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: bestSellingConstance.GET_BEST_SELLING_PRODUCTS_SUCCESS,
            payload: {
              products: res.data.products,
            },
          });
        }
      });
    } catch (error) {}
  };
};
