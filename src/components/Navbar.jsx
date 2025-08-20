'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-1.5 sm:py-2.5 px-4 sm:px-8 lg:px-12 bg-transparent absolute w-full top-0 z-50">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link 
          href="#hero" 
          onClick={closeMenu}
          className="focus:outline-none"
          aria-label="Go to homepage"
        >
          <Image 
            src={logo}
            alt="The Oasis Logo" 
            className="h-20 sm:h-16 transition-all duration-300 logo" 
            width={170}
            height={80}
            priority
          />
        </Link>
        
        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none z-50 p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-40 sm:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Navigation Links Container */}
      <div
        className={`fixed sm:static top-0 right-0 h-screen sm:h-auto w-4/5 sm:w-auto bg-gray-900 sm:bg-transparent z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        } transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row list-none gap-0 sm:gap-6 md:gap-8 lg:gap-10 font-['Open_Sans',_sans-serif] h-full pt-24 sm:pt-0 px-6 sm:px-0">
          <li>
            <Link
              href="#about"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] transition-colors duration-300 block py-5 sm:py-0 border-b border-gray-800 sm:border-0 text-xl sm:text-lg font-medium"
              aria-label="About Us section"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#rooms"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] transition-colors duration-300 block py-5 sm:py-0 border-b border-gray-800 sm:border-0 text-xl sm:text-lg font-medium"
              aria-label="Our Rooms section"
            >
              Our Rooms
            </Link>
          </li>
          <li>
            <Link
              href="#amenities"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] transition-colors duration-300 block py-5 sm:py-0 border-b border-gray-800 sm:border-0 text-xl sm:text-lg font-medium"
              aria-label="Amenities section"
            >
              Amenities
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] transition-colors duration-300 block py-5 sm:py-0 border-b border-gray-800 sm:border-0 text-xl sm:text-lg font-medium"
              aria-label="Contact section"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Book Now Button - Positioned at bottom */}
        <div className="mt-auto p-6 sm:hidden border-t border-gray-800">
          <a
            href="https://direct-book.com/properties/OasisHotel"
            className="flex items-center justify-center py-4 px-8 bg-[#D4A373] text-white no-underline font-['Open_Sans',_sans-serif] text-lg font-semibold rounded-sm hover:bg-[#C29360] transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Book Now"
          >
            Book Now
            <svg 
              className="ml-3 h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Desktop Book Now Button */}
      <a
        href="https://direct-book.com/properties/OasisHotel"
        className="hidden sm:flex items-center py-2.5 px-6 md:py-3 md:px-7 bg-[#D4A373] text-white no-underline font-['Open_Sans',_sans-serif] text-base md:text-lg font-medium rounded-sm hover:bg-[#C29360] transition-all duration-300 shadow-md hover:shadow-lg"
        aria-label="Book Now"
      >
        Book Now
        <svg 
          className="ml-2 h-5 w-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </nav>
  );
};

export default Navbar;