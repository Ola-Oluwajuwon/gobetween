"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/#about" },
    { title: "Skills", path: "/#skills" },
    { title: "Portfolio", path: "/#portfolio" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/#contact" },
  ];

  return (
    <header className="bg-sidebar fixed top-0 left-0 h-screen w-20 md:w-72 z-40 flex flex-col shadow-lg overflow-hidden transition-all duration-300">
      <div className="flex flex-col items-center py-8">
        <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden mb-3">
          <Image
            src="/juwon.png"
            alt="Profile"
            className="w-full h-full object-cover"
            width={96}
            height={96}
          />
        </div>
        <h1 className="text-xl font-bold text-white mt-2 hidden md:block">
          Your Name
        </h1>

        <div className="mt-3 space-x-3 hidden md:flex">
          {/* Social Links */}
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0..." />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2..."
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761..."
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <nav className="flex-1 mt-6">
        <button
          onClick={toggleMenu}
          className="md:hidden absolute top-5 right-2 text-white w-8 h-8 flex items-center justify-center rounded-full"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col space-y-2 px-6`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="flex items-center text-gray-300 hover:text-white py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pb-6 text-center text-xs text-gray-500 hidden md:block">
        <p>&copy; {new Date().getFullYear()} go-between.me</p>
        <p>All Rights Reserved</p>
      </div>
    </header>
  );
};

export default Navbar;
