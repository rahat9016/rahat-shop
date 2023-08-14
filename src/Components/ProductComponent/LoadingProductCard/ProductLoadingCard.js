import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductLoadingCard = () => {
  return (
    <div className="bg-white rounded-md animate-pulse shadow ">
      <div className="p-3 flex flex-col lg:flex-row gap-5 justify-between items-center">
        <div className="w-full">
          <div className="h-[180px] lg:h-[380px] p-2 text-center w-full bg-slate-200 rounded-sm"></div>
        </div>
        <div className="w-full">
          <div className="h-8 w-full bg-slate-200 mb-4 rounded-sm"></div>
          <div className="flex items-center gap-3">
            <span className="px-10 lg:px-16 py-4 bg-slate-200 rounded-full"></span>
            <span className="px-10 lg:px-16 py-4 bg-slate-200 rounded-full"></span>
            <span className="px-10 lg:px-16 py-4 bg-slate-200 rounded-full"></span>
          </div>
          <div className="flex items-center mt-4 mb-4">
            <AiFillStar className="text-slate-200 text-lg" />
            <AiFillStar className="text-slate-200 text-lg" />
            <AiFillStar className="text-slate-200 text-lg" />
            <AiFillStar className="text-slate-200 text-lg" />
            <AiFillStar className="text-slate-200 text-lg" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-slate-200"></div>
            <div className="h-3 w-full bg-slate-200 my-3 rounded-sm"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-slate-200"></div>
            <div className="h-3 w-full bg-slate-200 my-3 rounded-sm"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-slate-200"></div>
            <div className="h-3 w-full bg-slate-200 my-3 rounded-sm"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-slate-200"></div>
            <div className="h-3 w-full bg-slate-200 my-3 rounded-sm"></div>
          </div>
          <div className="h-8 w-40 bg-slate-200 my-3 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoadingCard;
