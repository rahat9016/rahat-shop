import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import ProductLoadingPage from "../../Components/ProductComponent/ProductLoadingPage/ProductLoadingPage";
import ProductCard from "../../Components/ProductComponent/ProductCard/ProductCard";
import NotFoundProduct from "../../Components/ProductComponent/NotFoundProduct/NotFoundProduct";
import { searchProductBySearch } from "../../redux/action/product.action";

const SearchProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const query = location.search.split("=")[1];
  const { searchProducts, loading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(searchProductBySearch({ text: query }));
  }, [dispatch, query]);

  useEffect(() => {
    setProducts(searchProducts);
  }, [searchProducts]);
  return (
    <Layout>
      <div className="bg-bgShop pb-20">
        <MenuSection />
        <div className="max-w-7xl mx-auto w-full mt-5 px-2">
          {loading ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              ) : (
                <div>{products.length > 0 ? null : <NotFoundProduct />}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchProduct;
