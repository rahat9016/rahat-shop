import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import TopBar from "../../Components/TopBar/TopBar";
import Slider from "@mui/material/Slider";
import ToggleMenu from "../../Components/ToggleMenu/ToggleMenu";
import ProductLoadingPage from "../../Components/ProductComponent/ProductLoadingPage/ProductLoadingPage";
import NotFoundProduct from "../../Components/ProductComponent/NotFoundProduct/NotFoundProduct";
import { searchURL } from "../../helpers/searchUrl";
import { filterProducts } from "../../redux/action/product.action";
import HomeProductCard from "../../Components/ProductComponent/ProductCard/HomeProductCard";
const Shop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([0, 500000]);
  const [color, setColor] = useState([
    "#5DADE2",
    "#F2D7D5",
    "#F4D03F",
    "#8E44AD",
    "#2ECC71",
    "#2ECC71",
    "#2ECC71",
    "#2ECC71",
  ]);
  const getProducts = useSelector((state) => state.product);
  const brands = useSelector((state) => state.brands.brands);

  let searchCategoryID = searchURL(location.search);

  // 1. <----------- Load Product by Default on page load ------------->
  useEffect(() => {
    if (location.pathname === "/shop") {
      setProducts(getProducts.products);
    }
    if (location.search !== "") {
      dispatch(filterProducts({ id: searchCategoryID }));
    }
  }, [
    dispatch,
    getProducts.products,
    location.pathname,
    location.search,
    searchCategoryID,
  ]);

  useEffect(() => {
    setProducts(getProducts.filterProducts);
  }, [getProducts.filterProducts]);

  return (
    <Layout>
      <div className="bg-bgShop pb-20">
        <MenuSection />
        <div className="max-w-7xl mx-auto flex gap-4 w-full mt-5">
          <div className="hidden lg:block lg:w-[20%] ">
            <div className="flex flex-col gap-2 z-0">
              <ToggleMenu title={"Price"}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={price}
                  // onChange={handlePrice}
                  valueLabelDisplay="auto"
                  min={0}
                  max={500000}
                  className="z-0"
                />
                <div className="flex items-center justify-between">
                  <h1 className="border-slate-200 border-[1px] px-4 py-1">
                    ${price[0]}
                  </h1>
                  <h1 className="border-slate-200 border-[1px] px-4 py-1">
                    ${price[1]}
                  </h1>
                </div>
              </ToggleMenu>
              <ToggleMenu title={"Availability"}>
                <div className="flex gap-2 items-center mb-2">
                  <input type="checkbox" id="inStoke" />
                  <label htmlFor="inStoke">In Stoke</label>
                </div>
                <div className="flex gap-2 items-center mb-2">
                  <input type="checkbox" id="upComing" />
                  <label htmlFor="upComing">Up Coming</label>
                </div>
              </ToggleMenu>
              <ToggleMenu title={"Brand"}>
                <ul>
                  {brands.length > 0
                    ? brands.map((brand, index) => {
                        return (
                          <li
                            // onClick={() => handleClickBrand(brand._id)}
                            className="cursor-pointer my-1"
                            key={index}
                          >
                            {brand.name}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </ToggleMenu>
              <ToggleMenu title={"Color"}>
                <div className="flex flex-wrap gap-2 mt-4">
                  {color.map((c, index) => (
                    <div
                      style={{ background: `${c}` }}
                      className="w-7 h-7 rounded-full"
                      key={index}
                    ></div>
                  ))}
                </div>
              </ToggleMenu>
              <ToggleMenu title={"Shipping"}>
                <div className="flex gap-2 items-center mb-2">
                  <input
                    type="checkbox"
                    id="yes"
                    // onChange={handleChangeCheckbox}
                    value="Yes"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div className="flex gap-2 items-center mb-2">
                  <input
                    type="checkbox"
                    id="no"
                    // onChange={handleChangeCheckbox}
                    value="No"
                  />
                  <label htmlFor="no">No</label>
                </div>
              </ToggleMenu>
            </div>
          </div>
          <div className="w-full lg:w-[80%]">
            <TopBar />
            <div className="my-3">
              {getProducts.loading ? (
                <div className="px-2 lg:px-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                  <ProductLoadingPage />
                </div>
              ) : (
                <div>
                  {products.length > 0 ? (
                    <div className="px-2 lg:px-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                      {products.map((product) => (
                        <HomeProductCard key={product._id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div>
                      {products.length > 0 ? null : <NotFoundProduct />}
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

export default Shop;
