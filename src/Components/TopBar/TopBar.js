import React from "react";

const TopBar = () => {
  return (
    <div className="bg-white shadow-sm flex text-sm md:text-base gap-2 h-12 lg:h-14 items-center justify-center md:justify-between px-1 lg:px-2 rounded-sm">
      <div>
        <h1>All Products</h1>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center">
          <h1>Show:</h1>
          <select>
            <option>20</option>
            <option>24</option>
            <option>48</option>
          </select>
        </div>
        <div className="flex items-center">
          <h1>Sort By:</h1>
          <select  className="w-20">
            <option>Default</option>
            <option>Price (Low &gt; High)</option>
            <option>Price (High &gt; Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
