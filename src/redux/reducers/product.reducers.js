import {
  bestSellingConstance,
  getAllProducts,
  getProductById,
  getRelatedProduct,
  productBySearch,
} from "../action/constnace";
const initialState = {
  product: null,
  products: [],
  searchProducts: [],
  filterProducts: [],
  relatedProducts: [],
  bestSellingProducts: [],
  loading: false,
};

export const product_reducers = (state = initialState, action) => {
  switch (action.type) {
    case getAllProducts.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getAllProducts.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case getAllProducts.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
      };
    case getAllProducts.GET_PRODUCTS_BY_CATEGORY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getAllProducts.GET_PRODUCTS_BY_CATEGORY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        filterProducts: action.payload.products,
      };
    case getProductById.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getProductById.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };
    case getRelatedProduct.GET_RELATED_PRODUCT_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case getRelatedProduct.GET_RELATED_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        relatedProducts: action.payload.products,
      };
    case productBySearch.SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productBySearch.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        searchProducts: action.payload.search,
      };
    case bestSellingConstance.GET_BEST_SELLING_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case bestSellingConstance.GET_BEST_SELLING_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        bestSellingProducts: action.payload.products,
      };
    default:
      return state;
  }
};

export const findProductById = (state = initialState, action) => {
  switch (action.type) {
    case getProductById.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getProductById.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };
    default:
      return state;
  }
};
const initialRelatedState = {
  products: [],
  loading: false,
};
export const getRelatedProducts = (state = initialRelatedState, action) => {
  switch (action.type) {
    case getRelatedProduct.GET_RELATED_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getRelatedProduct.GET_RELATED_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
// export const searchProductBySearch = (
//   state = { products: [], loading: false },
//   action
// ) => {
//   switch (action.type) {
//     case productBySearch.SEARCH_PRODUCT_FAILURE:
//       return {
//         ...state,
//         loading: true,
//       };
//     case productBySearch.SEARCH_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         products: action.payload.search,
//       };
//     default:
//       return state;
//   }
// };
