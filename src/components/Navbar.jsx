import React, { useState } from "react";
import smartDotLogo from "../assets/smartDot.svg";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-green-900 sticky top-0 z-50">
      <Link to="/" className="flex justify-center items-center">
        <img className="h-10 " src={smartDotLogo} alt="Brand Logo" />
        <h2 className="text-2xl font-bold text-white pl-2">SmartDotElc</h2>
      </Link>
      <div className="flex items-center space-x-4">
        <ul className="md:flex md:space-x-4 hidden">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/products" className="text-white">Shop</Link></li>
          <li><Link to="/about" className="text-white">About</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
        </ul>
        <span className="flex ">
          <Link to="/products">
            <FiShoppingCart className="text-white text-3xl cursor-pointer" />
          </Link>
          <Link to="/login">
            <FaUserCircle className="text-white text-3xl cursor-pointer ml-4 " />
          </Link>
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
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/products" className="text-white">Shop</Link></li>
            <li><Link to="/about" className="text-white">About</Link></li>
            <li><Link to="/contact" className="text-white">Contact</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
