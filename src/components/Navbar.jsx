import React, { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import skyvionLogo from "/logo-removebg.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
 

  return (
    <nav className="w-full flex py-4 px-6 justify-between items-center bg-[#0B0D17] shadow-md">
    {/* Logo */}
    <img src={skyvionLogo} alt="Skyvion" className="w-[140px] h-[80px] object-contain brightness-200 contrast-200" />
  
    {/* Desktop Navigation */}
    <ul className="hidden sm:flex space-x-8">
      {navLinks.map((nav) => (
        <li key={nav.id} className="relative group">
          <a
            href={`${nav.id}`}
            className="text-lg font-semibold text-gray-200 hover:text-gray-400 transition duration-300"
           
          >
            {nav.title}
          </a>
  
          
        </li>
      ))}
    </ul>
  
    {/* Mobile Menu Toggle */}
    <div className="sm:hidden flex items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-8 h-8 cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      />
    </div>
  
    {/* Mobile Navigation */}
    {toggle && (
      <div className="absolute top-28 right-4 bg-[#1A1C2A] text-gray-200 p-4 rounded-lg shadow-xl sm:hidden w-56">
        <ul className="flex flex-col space-y-4">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`${nav.id}`}
                className="block text-lg font-semibold hover:text-gray-400 transition duration-300"
              >
                {nav.title}
              </a>
  
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>
  
  );
};

export default Navbar;
