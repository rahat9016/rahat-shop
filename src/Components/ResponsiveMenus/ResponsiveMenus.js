import React from "react";
import { useSelector } from "react-redux";
import { renderCategory } from "../../Data/Data";
const ResponsiveMenus = (props) => {
  const { category } = useSelector((state) => state.category);
  return (
    <div
      className={`md:hidden absolute top-[61px] sm:top-[78px] z-50 w-full bg-white shadow-sm duration-500 ${
        props.open ? "left-0" : "left-[-100%]"
      }`}
    >
      {<ul className="list-none px-3">{renderCategory(category)}</ul>}
    </div>
  );
};

export default ResponsiveMenus;
