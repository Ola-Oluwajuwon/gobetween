"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">go-between.me</h2>
            <p className="text-gray-400 mt-2">
              Connecting ideas and technology
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Visit our Twitter profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348..." />
              </svg>
            </Link>

            <Link
              href="#"
              aria-label="Visit our GitHub profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425..."
                />
              </svg>
            </Link>

            <Link
              href="#"
              aria-label="Visit our LinkedIn profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14..."
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} go-between.me. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
