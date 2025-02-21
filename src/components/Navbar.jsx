import React, { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import skyvionLogo from "/logo-removebg.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <nav className="w-full flex py-4 px-6 justify-between items-center  shadow-md">
      {/* Logo */}
      <img src={skyvionLogo} alt="Skyvion" className="w-[140px] h-[80px] object-contain" />

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-8">
        {navLinks.map((nav) => (
          <li key={nav.id} className="relative group">
            {/* Main Nav Item */}
            <a
              href={`#${nav.id}`}
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
              onMouseEnter={() => setDropdownOpen(nav.id)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              {nav.title}
            </a>

            {/* Dropdown Menu */}
            {nav.subMenu && dropdownOpen === nav.id && (
              <ul className="absolute left-0 top-full w-48 bg-gray-100 text-gray-800 rounded-lg shadow-lg mt-2 p-2 z-50">
                {nav.subMenu.map((subItem) => (
                  <li key={subItem.id} className="p-2 hover:bg-gray-200 rounded">
                    <a href={`#${subItem.id}`} className="block">
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
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
        <div className="absolute top-16 right-4 bg-white text-gray-800 p-4 rounded-lg shadow-xl sm:hidden w-56">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className="block text-lg font-semibold hover:text-blue-600 transition duration-300"
                >
                  {nav.title}
                </a>

                {/* Mobile Dropdown */}
                {nav.subMenu && (
                  <ul className="mt-2 pl-4 space-y-2">
                    {nav.subMenu.map((subItem) => (
                      <li key={subItem.id}>
                        <a href={`#${subItem.id}`} className="text-gray-800 hover:text-blue-600">
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
