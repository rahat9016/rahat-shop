import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Reviews from "../../Components/Reviews/Reviews";
import Ratings from "../../Components/Reviews/Ratings";
import RelatedProducts from "../../Components/ProductComponent/RelatedProduct/RelatedProducts";
import {
  findProductById,
  getRelatedProductById,
} from "../../redux/action/product.action";
import { addToCart } from "../../redux/action/cart.action";
import ProductLoadingCard from "../../Components/ProductComponent/LoadingProductCard/ProductLoadingCard";
const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = location.search.split("=")[1];
  // const { product, relatedProducts } = useSelector((state) => state.product);
  const productState = useSelector((state) => state.product);
  // destructure product image
  const product = productState.product;
  const relatedProducts = productState.relatedProducts;
  const proImg = product && product?.productPictures[0].url;
  const [singleProductImage, setSingleProductImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setSingleProductImage(proImg);
  }, [proImg]);
  const hoverHandler = (image, i) => {
    setSingleProductImage(image);
  };
  // Find Product By ID
  useEffect(() => {
    dispatch(findProductById(params));
    dispatch(getRelatedProductById(params));
  }, [dispatch, params]);

  const handleCart = () => {
    dispatch(addToCart(product?._id, quantity));
  };

  const handleIncrement = () => {
    if (product.quantity <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      const qty = quantity - 1;
      setQuantity(qty);
    }
  };
  return (
    <Layout>
      <div>
        <MenuSection />
        <div className="max-w-7xl mx-auto p-2">
          {productState.loading ? (
            <ProductLoadingCard />
          ) : (
            <div className="flex flex-col lg:flex-row items-center py-10">
              {/* Product Images */}
              <div className="flex flex-col items-center gap-4 lg:w-[40%] ">
                <img
                  src={singleProductImage}
                  className="w-96 lg:w-full	block ml-auto mr-auto mb-1"
                  alt=""
                />
                <div className="flex flex-row gap-1">
                  {product &&
                    product.productPictures.map((productImg, i) => {
                      return (
                        <img
                          key={i}
                          src={productImg?.url}
                          alt=""
                          className="w-16 h-16 p-1 cursor-pointer border border-lightWhite shadow-sm"
                          onMouseOver={() => hoverHandler(productImg?.url, i)}
                        />
                      );
                    })}
                </div>
              </div>
              {/* Product Information */}
              <div className="w-full lg:w-[60%] mt-6">
                <h1 className="text-xl text-textBlue mb-4 font-plus">
                  {product && product.name}
                </h1>

                <div className="flex items-center gap-3">
                  <span className="text-sm px-4 py-2 bg-bgShop font-quick font-bold rounded-full">
                    <span className="text-textGray font-medium ">Price: </span>
                    {product && product.price}৳
                  </span>
                  <span className="text-sm px-4 py-2 bg-bgShop font-quick font-bold rounded-full">
                    <span className="text-textGray font-medium ">Status: </span>
                    In Stoke
                  </span>
                  <span className="text-sm px-4 py-2 bg-bgShop font-quick font-bold rounded-full">
                    <span className="text-textGray font-medium ">Brand: </span>
                    {product && product?.brand.name}
                  </span>
                </div>
                <div className="flex mt-3 items-center">
                  {product && product.reviews.length > 0 ? (
                    <div className="flex items-center">
                      <Ratings product={product} />{" "}
                      <p className="ml-2 text-[#1a9cb7]">
                        {product && product.reviews.length} Ratings
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <AiFillStar className="text-gray text-lg" />
                      <AiFillStar className="text-gray text-lg" />
                      <AiFillStar className="text-gray text-lg" />
                      <AiFillStar className="text-gray text-lg" />
                      <AiFillStar className="text-gray text-lg" />
                      <p className="ml-2 text-[#1a9cb7]">0 Ratings</p>
                    </div>
                  )}
                </div>
                <div className="my-5">
                  <h2 className="text-2xl mb-2">Key Features</h2>
                  <ul className="list-none text-primaryLight text-[15px]">
                    {product &&
                      product.keyFeatures.map((feature) => (
                        <li key={feature._id} className="mb-1 text-base">
                          {feature.key}
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center">
                    <button
                      className="border border-lightWhite px-3 py-3"
                      onClick={handleDecrement}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="border border-lightWhite px-5 py-2  ">
                      {quantity}
                    </span>
                    <button
                      className="border border-lightWhite px-3 py-3"
                      onClick={handleIncrement}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button className="text-lg bg-orange px-6 lg:px-12 xl:px-16  py-2  text-white">
                      Buy Now
                    </button>
                    <button
                      className="text-lg bg-btnBlue px-6 lg:px-12 xl:px-16  py-2 text-white"
                      onClick={handleCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-2xl mb-2">Description</h3>
                  <p className="text-justify">
                    {product && product.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-bgShop">
          <div className="max-w-7xl mx-auto pb-10">
            <div className="lg:flex  gap-7 mt-11 ">
              <div className="lg:w-[70%] ">
                <Reviews product={product} />
              </div>
              <div className="lg:w-[30%] ">
                {" "}
                <RelatedProducts relateProducts={relatedProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
