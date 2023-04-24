import React, { useState } from "react";
import { information } from "../../Data/Data";
import Logo from "../../Images/logo.png";
import { MdCall } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import Cart from "./components/cart";
import ResponsiveMenus from "../ResponsiveMenus/ResponsiveMenus";
import Auth from "./components/auth";
const Header = ({ home }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <header>
      {home ? (
        <div>
          {/* Top bar */}
          <div className="bg-primary text-white hidden lg:block">
            <div className="w-full lg:max-w-7xl mx-auto flex justify-between items-center px-2 py-1">
              <img src={Logo} alt="Logo" className="lg:block lg:w-16" />
              <ul className="flex items-center gap-3">
                {information.map((info, index) => (
                  <li key={index} className="font-fira">
                    {info.value}
                  </li>
                ))}
              </ul>
              <div className="lg:flex items-center justify-end gap-3 font-fira ">
                {/* Mobile Number */}
                <div className="flex items-center gap-1 text-sm lg:text-base">
                  <MdCall />
                  +880 16386****90
                </div>
                <div className="flex items-center gap-1 text-sm lg:text-base">
                  <RiMessage2Fill />
                  Send Message
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primaryDark ">
            <div className="w-full lg:max-w-7xl mx-auto flex items-center justify-between lg:justify-start gap-6  px-2 py-2">
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className="w-fit text-3xl lg:hidden text-white cursor-pointer"
              >
                {open ? (
                  <CgClose className="text-3xl text-white" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-3xl text-white" />
                )}
              </div>
              <h1 className="text-white font-bold font-varelo text-base xl:text-2xl hidden lg:block ">Shop By Category</h1 >
              <img
                src={Logo}
                alt="Logo"
                className="cursor-pointer w-14 lg:hidden"
                onClick={() => navigate("/")}
              />
              <div className="hidden lg:block w-7/12"><Search/></div>
              <div className="flex items-center gap-2">
              <Cart/>
              <Auth/>
              </div>
            </div>
          </div>
          <ResponsiveMenus open={open} />
        </div>
      ) : (
        // <<<----------------------------------------------------->>>
        <div>
          <div className="bg-primaryDark ">
            <div className="w-full lg:max-w-7xl mx-auto flex items-center justify-between lg:justify-start gap-10  px-2 py-2">
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className="w-fit text-3xl lg:hidden text-white cursor-pointer"
              >
                {open ? (
                  <CgClose className="text-3xl text-white" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-3xl text-white" />
                )}
              </div>
              <div className="lg:w-2/12">
              <img
                src={Logo}
                alt="Logo"
                className="cursor-pointer w-14"
                onClick={() => navigate("/")}
              />
              </div>
              <div className="hidden lg:block w-7/12"><Search/></div>
              <div className="flex items-center gap-2">
              <Cart/>
              <Auth/>
              </div>
            </div>
          </div>
          <ResponsiveMenus open={open} />
        </div>
      )}
    </header>
  );
};

export default Header;
