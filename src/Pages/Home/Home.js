import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import NotFoundProduct from "../../Components/ProductComponent/NotFoundProduct/NotFoundProduct";
import ProductCard from "../../Components/ProductComponent/ProductCard/ProductCard";
import ProductLoadingPage from "../../Components/ProductComponent/ProductLoadingPage/ProductLoadingPage";
import { getAllProductsAction } from "../../redux/action/product.action";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../redux/action/auth.action";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, auth.authenticate]);
  return (
    <Layout home>
      <div className="lg:h-[650px] bg-white bg">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="md:flex ">
            <div className="hidden md:block md:w-[25%]">
              <MenuSection home />
            </div>
            <div className="w-full md:w-[75%]">
              <HeroSection />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bgShop pb-20 pt-10 bg ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-fira">Best Selling</h1>
            <p className="font-fira mb-5">Check & Get Your Desired Product!</p>
          </div>
          <div>
            {product.loading ? (
              <div className="px-2 sm:px-10 md:px-8 lg:px-4 xl:px-0 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ProductLoadingPage />
                <ProductLoadingPage />
                <ProductLoadingPage />
                <ProductLoadingPage />
                <ProductLoadingPage />
              </div>
            ) : (
              <div>
                {product.bestSellingProducts.length > 0 ? (
                  <div className="px-2 sm:px-10 md:px-8 lg:px-4 xl:px-0 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {product.bestSellingProducts.map((product, index) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div>
                    {product.bestSellingProducts.length > 0 ? null : (
                      <NotFoundProduct />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-bgShop pb-20 pt-10 bg ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-fira">Featured Category</h1>
            <p className="font-fira mb-5">
              Get Your Desired Product from Featured Category!
            </p>
          </div>
          <div>
            {category.loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <div>
                {category.category.length > 0 ? (
                  <div className="px-10 md:px-2 lg:px-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                    {category.category.map((category, index) => {
                      return (
                        <div
                          className="bg-white shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-center  items-center p-3 rounded-xl"
                          key={index}
                          onClick={() => {
                            navigate(`/shop?${category.title}/${category._id}`);
                          }}
                        >
                          <div className="h-18">
                            <img
                              src={
                                category?.categoryImg &&
                                category?.categoryImg?.url
                              }
                              alt=""
                              className="w-14 "
                            />
                          </div>
                          <h1 className="text-[#01132d] hover:text-orange font-tilt">
                            {category.title}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-bgShop pb-20 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-fira">All Products</h1>
            <p className="font-fira mb-5">Check & Get Your Desired Product!</p>
          </div>
          <div className="">
            <div className="">
              {product.loading ? (
                <div className="px-2 sm:px-10 md:px-8 lg:px-4 xl:px-0 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                </div>
              ) : (
                <div>
                  {product.products.length > 0 ? (
                    <div className="px-2 sm:px-10 md:px-8 lg:px-4 xl:px-0 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                      {product.products.slice(0, 10).map((product, index) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div>
                      {product.bestSellingProducts.length > 0 ? null : (
                        <NotFoundProduct />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
