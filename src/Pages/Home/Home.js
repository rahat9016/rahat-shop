import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import NotFoundProduct from "../../Components/ProductComponent/NotFoundProduct/NotFoundProduct";
import ProductLoadingPage from "../../Components/ProductComponent/ProductLoadingPage/ProductLoadingPage";
import { getAllProductsAction } from "../../redux/action/product.action";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../redux/action/auth.action";
import HomeProductCard from "../../Components/ProductComponent/ProductCard/HomeProductCard";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);
  const brands = useSelector((state) => state.brands.brands);
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
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="md:flex">
            <div className="hidden lg:block md:w-[25%]">
              <MenuSection home />
            </div>
            <div  className="w-full lg:w-[75%]">
              <div>
                <HeroSection />
              </div>
              <div className="flex justify-between items-center my-6 gap-3 px-10 md:px-10 lg:px-0">
                {brands.length > 0
                  ? brands.slice(0, 5).map((brand) => {
                      return (
                        <div key={brand._id}>
                          <img
                            src={brand.brandLogo && brand.brandLogo?.url}
                            alt=""
                            className="h-8 md:h-12 block ml-auto mr-auto "
                          />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bgShop py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-fira">Best Selling</h1>
            <p className="font-fira mb-5">Check & Get Your Desired Product!</p>
          </div>
          <div className="px-3 xl:px-0">
            {product.loading ? (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ProductLoadingPage />
                <ProductLoadingPage />
                <ProductLoadingPage />
                <ProductLoadingPage />
                <ProductLoadingPage />
              </div>
            ) : (
              <div>
                {product.bestSellingProducts.length > 0 ? (
                  <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {product.bestSellingProducts.map((product, index) => (
                      <HomeProductCard key={product._id} product={product} />
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
      <div className="bg-bgShop pb-20 pt-10 px-2 ">
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
                  <div className="px-4 md:px-2 lg:px-0 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
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
                          <h1 className="text-[#01132d] hover:text-orange font-tilt text-sm md:text-base">
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
            <div className="px-3 xl:px-0">
              {product.loading ? (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                </div>
              ) : (
                <div>
                  {product.products.length > 0 ? (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                      {product.products.slice(0, 10).map((product, index) => (
                        <HomeProductCard key={product._id} product={product} />
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
    </Layout>
  );
};

export default Home;
