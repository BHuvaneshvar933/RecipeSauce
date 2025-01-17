import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <header className="  px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        RECIPE<span className="text-orange">SAUCE</span>
      </h1>
      <nav className="relative">
        <button
          onClick={toggleDropdown}
          className=" font-medium hover:text-orange-500 sm:hidden"
        >
          Menu
        </button>
        {(isDropdownOpen || !isMobile) && (
          <ul
            className={`${
              isMobile ? "absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40" : "flex space-x-4"
            }`}
          >
            <li>
              <Link
                to="/home"
                onClick={closeDropdown}
                className="block px-4 py-2 text-sm  hover:bg-orange-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                onClick={closeDropdown}
                className="block px-4 py-2 text-sm  hover:bg-orange-500"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeDropdown}
                className="block px-4 py-2 text-sm  hover:bg-orange-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeDropdown}
                className="block px-4 py-2 text-sm  hover:bg-orange-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
