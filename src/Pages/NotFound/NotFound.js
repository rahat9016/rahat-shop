import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";

const NotFound = () => {
  return (
    <Layout>
      <MenuSection />
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <p className="flex items-center gap-2 font-bold">
          <span className="text-rose-500 font-nunito text-2xl">404</span> Not
          Found
        </p>
        <Link to="/" className="">
          Go back
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
