import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faGem, faPhone } from "@fortawesome/free-solid-svg-icons";

export const NavbarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">MyLuxuryJewelry</div>

        {/* Navbar Links */}
        <div className="flex space-x-6 hidden lg:flex">
          <a href="/" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </a>
          <a href="/presentation" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Présentation
          </a>
          <a href="/products" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faGem} className="mr-2" />
            Products
          </a>
          <a href="/contact" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional rendering based on isMenuOpen state) */}
      <div className={`lg:hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <a href="/" className="block text-white hover:text-gray-300 py-2">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </a>
        <a href="/presentation" className="block text-white hover:text-gray-300 py-2">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          Présentation
        </a>
        <a href="/products" className="block text-white hover:text-gray-300 py-2">
          <FontAwesomeIcon icon={faGem} className="mr-2" />
          Products
        </a>
        <a href="/contact" className="block text-white hover:text-gray-300 py-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          Contact
        </a>
      </div>
    </nav>
  );
};
