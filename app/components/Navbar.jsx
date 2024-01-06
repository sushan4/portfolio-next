"use client";
// Import necessary modules
import React, { useState } from "react";
import Link from "next/link";

// Navbar component
const Navbar = () => {
  // State variable to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Button for small screens */}
      <button
        className="block sm:hidden text-3xl font-bold"
        onClick={toggleMenu}
      >
        ☰ 
      </button>

      {/* Navbar items */}
      <ul
        className={`${
          isMenuOpen ? "flex flex-col" : "hidden"
        } sm:flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-3xl font-bold font-sans`}
      >
        <li className="hover:text-slate-500">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link href="#services">Services</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

