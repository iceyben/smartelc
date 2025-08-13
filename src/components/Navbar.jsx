import React, { useState } from "react";
import smartDotLogo from "../assets/smartDot.svg";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-green-900 sticky top-0 z-50">
      <span className="flex justify-center items-center">
        <img className="h-10 " src={smartDotLogo} alt="Brand Logo" />
        <h2 className="text-2xl font-bold text-white pl-2">SmartDotElc</h2>
      </span>
      <div className="flex items-center space-x-4">
        <ul className="md:flex md:space-x-4 hidden">
          <li className="text-white">Home</li>
          <li className="text-white">Shop</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
        </ul>
        <span className="flex ">
          <FiShoppingCart className="text-white text-3xl cursor-pointer" />
          <FaUserCircle className="text-white text-3xl cursor-pointer ml-4 " />
          {menuOpen ? (
            <AiOutlineClose
              className="text-white text-3xl cursor-pointer ml-4 md:hidden"
              onClick={handleMenuToggle}
            />
          ) : (
            <AiOutlineMenu
              className="text-white text-3xl cursor-pointer ml-4 md:hidden"
              onClick={handleMenuToggle}
            />
          )}
        </span>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute right-1 top-16 bg-green-800 rounded shadow-lg flex flex-col space-y-4 py-4 pl-20 md:hidden z-50 cursor w-full">
            <li className="text-white ">Home</li>
            <li className="text-white ">Shop</li>
            <li className="text-white ">About</li>
            <li className="text-white ">Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
