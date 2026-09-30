import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full text-white">
      <div className="max-w-[1200px] px-4 h-15 mx-auto flex items-center  justify-between ">
        <h1 className="text-primary text-[20px] font-semibold">REACT</h1>
        <div className=" hidden md:flex">
          <ul className=" flex gap-5 ml-150">
            <li className="">
              <a href="">Home</a>
            </li>
            <li className="">
              <a href="">Account</a>
            </li>
            <li className="">
              <a href="">Sign in</a>
            </li>
            {/* <li className="p-4">
              <a href="">About </a>
            </li>
            <li className="p-4">
              <a href="">Contact</a>
            </li> */}
          </ul>
          <button className="bg-white text-black w-23 h-8 rounded-[5px] ml-5">
            Get Started
          </button>
        </div>
        <div onClick={handleNav}>
          {!nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <IoMenuOutline size={20} className=" flex items-center md:hidden" />
          )}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <h1 className="text-primary text-[20px] font-semibold m-4">REACT</h1>
          <ul className=" uppercase p-4">
            <li className="p-4 border-b border-gray-600">
              <a href="">Home</a>
            </li>
            <li className="p-4  border-b border-gray-600">
              <a href="">Company</a>
            </li>
            <li className="p-4  border-b border-gray-600">
              <a href="">Resources </a>
            </li>
            <li className="p-4  border-b border-gray-600">
              <a href="">About </a>
            </li>
            <li className="p-4">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
