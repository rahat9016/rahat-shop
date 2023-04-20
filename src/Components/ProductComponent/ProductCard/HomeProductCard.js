import React from "react";
import Button from "../../Button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/action/cart.action";
const HomeProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { _id, name, price, productPictures, keyFeatures } = product;
  const productImage = productPictures.map((img) => {
    return img.url;
  });
  const handleClick = () => {
    dispatch(addToCart(_id, 1));
  };
  return (
    <div className="bg-white rounded-md">
      <div className="p-3">
        <div className="h-40 flex justify-center items-center  border-[rgba(55,73,187,.03)] border-b-[3px] mb-2">
          <img
            src={productImage[0]}
            alt="Product Img"
            className="h-[140px] block ml-auto mr-auto mb-auto mt-auto "
          />
        </div>
        <div className="h-16 mb-2">
          <Link
            to={`/product_id?productId=${_id}`}
            className="hover:text-orange text-base font-semibold font-roboto "
          >
            {name.slice(0,55)}
          </Link>
        </div>
        <div className="pl-4 h-24">
          <ul className="list-disc text-primaryLight text-[15px]">
            {keyFeatures &&
              keyFeatures.slice(0, 2).map((feature) => (
                <li key={feature._id} className="text-textGray py-1">
                  {feature.key}
                </li>
              ))}
          </ul>
        </div>
        <span className="block w-full h-[1px] bg-gray my-5"></span>
        <div className="pb-2">
          <h2 className="text-orange text-lg text-center font-bold font-fira py-2">
            {price}৳
          </h2>
          <Button
            class="flex justify-center  items-center gap-2 text-base transition duration-300 ease-in-out text-btnBlue font-bold hover:text-white bg-[rgba(55,75,185,.1)] hover:bg-btnBlue px-8 py-2  rounded-md w-full "
            handleClick={handleClick}
          >
            <AiOutlineShoppingCart />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
