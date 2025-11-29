import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-20 backdrop-blur-md z-50">
      <div className="flex justify-between items-center w-full py-4 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Glint</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-9 text-white font-bold">
            <li>
              <Link className="hover:text-green-500 duration-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-500 duration-300" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-500 duration-300" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-500 duration-300" to="/works">
                Works
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-500 duration-300" to="/clients">
                Clients
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-500 duration-300" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Slide in from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 bg-black text-white text-lg mt-20">
          <li>
            <Link onClick={() => setIsOpen(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/works">
              Works
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/clients">
              Clients
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
