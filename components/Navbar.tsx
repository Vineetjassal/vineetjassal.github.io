import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-2 mb-8 mt-4 sticky top-2 bg-white shadow-lg rounded-2xl z-10">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-3xl font-bold font-sans">Vineet.Dev</span>
      </div>
      <div className="flex items-center md:items-stretch gap-6">
        <div className="hidden md:block">
          <Link
            href="/"
            className="text-black sm:font-medium md:inline-block sm:text-xl text-4xl font-semibold"
          >
            Home
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="/About"
            className="text-black sm:font-medium md:inline-block sm:text-xl text-4xl font-semibold"
          >
            About
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="/Project"
            className="text-black sm:font-medium md:inline-block sm:text-xl text-4xl font-semibold"
          >
            Projects
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white border-2 border-black bg-black rounded-3xl pt-1 pb-1 pl-4 pr-4 text-center font-medium shadow-md"
          >
            Menu
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden flex flex-col mt-4">
          <Link
            href="/"
            className="block text-black sm:font-medium sm:text-xl text-5xl font-bold mb-2"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="block text-black sm:font-medium sm:text-xl text-5xl font-bold mb-2"
          >
            About
          </Link>
          <Link
            href="/Project"
            className="block text-black sm:font-medium sm:text-xl text-5xl font-bold"
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;