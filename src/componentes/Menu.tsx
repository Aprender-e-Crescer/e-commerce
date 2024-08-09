import React from "react";
import { IoMdPerson } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Logo from "../assets/logo.png";

interface MenuProps {
  onCartClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onCartClick }) => {
  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto flex items-center py-4 px-6">
        <div className="flex-shrink-0 flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8" />
          <span className="text-black text-xl font-bold">Furniro</span>
        </div>

        <nav className="flex-1 flex justify-center space-x-6">
          <a href="#home" className="text-black hover:text-black">
            Home
          </a>
          <a href="#shop" className="text-black hover:text-black">
            Shop
          </a>
          <a href="#about" className="text-black hover:text-black">
            About
          </a>
          <a href="#contact" className="text-black hover:text-black">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <IoMdPerson className="text-black hover:text-gray-900 cursor-pointer text-2xl" />
          <HiMagnifyingGlass className="text-black hover:text-gray-900 cursor-pointer text-2xl" />
          <IoIosHeart className="text-black hover:text-gray-900 cursor-pointer text-2xl" />
          <IoCartOutline
            className="text-black hover:text-gray-900 cursor-pointer text-2xl"
            onClick={onCartClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Menu;
