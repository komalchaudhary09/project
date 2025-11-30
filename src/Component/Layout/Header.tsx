import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-20 backdrop-blur-md z-50">
      {/* Navbar Wrapper */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-8">
        
        {/* Logo */}
       <Link className="text-white text-2xl font-bold" to={"/"}>Glint</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-9 text-white font-bold whitespace-nowrap">
            <li><Link className="hover:text-green-500 duration-300" to="/">Home</Link></li>
            <li><Link className="hover:text-green-500 duration-300" to="/about">About</Link></li>
            <li><Link className="hover:text-green-500 duration-300" to="/services">Services</Link></li>
            <li><Link className="hover:text-green-500 duration-300" to="/works">Works</Link></li>
            <li><Link className="hover:text-green-500 duration-300" to="/clients">Clients</Link></li>
            <li><Link className="hover:text-green-500 duration-300" to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Push menu BELOW navbar height */}
        <div className="pt-[70px] bg-black h-full w-full">
          <ul className="flex flex-col items-center  bg-black gap-6 text-white text-lg">
            <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/services">Services</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/works">Works</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/clients">Clients</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
