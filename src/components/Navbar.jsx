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
    <nav className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-3 md:py-3 lg:py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-transparent absolute w-full top-0 z-50">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link 
          href="#hero" 
          onClick={closeMenu}
          className="focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
          aria-label="Go to homepage"
        >
          <Image 
            src={logo}
            alt="The Oasis Logo" 
            className="h-4 xs:h-5 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 transition-all duration-300 logo" 
            width={150}
            height={48}
            priority
          />
        </Link>
        
        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:ring-offset-2 focus:ring-offset-transparent rounded-sm z-50 p-1.5 transition-colors duration-200 hover:text-[#D4A373] active:text-[#D4A373]"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6 xs:h-7 xs:w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
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
        className={`fixed sm:static top-0 right-0 h-screen sm:h-auto w-full xs:w-4/5 sm:w-auto bg-gray-900 sm:bg-transparent z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        } transition-transform duration-300 ease-in-out flex flex-col sm:flex-row`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row list-none gap-0 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 font-['Open_Sans',_sans-serif] h-full pt-16 sm:pt-0 px-6 sm:px-0">
          <li className="w-full sm:w-auto">
            <Link
              href="#about"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] focus:text-[#D4A373] focus:outline-none transition-colors duration-300 block py-4 sm:py-2 border-b border-gray-700 sm:border-0 text-lg xs:text-xl sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-medium active:text-[#D4A373]"
              aria-label="About Us section"
            >
              About Us
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link
              href="#rooms"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] focus:text-[#D4A373] focus:outline-none transition-colors duration-300 block py-4 sm:py-2 border-b border-gray-700 sm:border-0 text-lg xs:text-xl sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-medium active:text-[#D4A373]"
              aria-label="Our Rooms section"
            >
              Our Rooms
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link
              href="#amenities"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] focus:text-[#D4A373] focus:outline-none transition-colors duration-300 block py-4 sm:py-2 border-b border-gray-700 sm:border-0 text-lg xs:text-xl sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-medium active:text-[#D4A373]"
              aria-label="Amenities section"
            >
              Amenities
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link
              href="#contact"
              onClick={closeMenu}
              className="text-[#F5F5F5] no-underline hover:text-[#D4A373] focus:text-[#D4A373] focus:outline-none transition-colors duration-300 block py-4 sm:py-2 border-b border-gray-700 sm:border-0 text-lg xs:text-xl sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-medium active:text-[#D4A373]"
              aria-label="Contact section"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Book Now Button - Positioned at bottom */}
        <div className="mt-auto p-4 xs:p-6 sm:hidden border-t border-gray-700">
          <a
            href="https://direct-book.com/properties/OasisHotel"
            className="flex items-center justify-center py-3 xs:py-4 px-6 xs:px-8 bg-[#D4A373] text-white no-underline font-['Open_Sans',_sans-serif] text-base xs:text-lg font-semibold rounded-sm hover:bg-[#C29360] focus:bg-[#C29360] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#D4A373] transition-all duration-300 shadow-lg hover:shadow-xl active:bg-[#B8845A] active:scale-95 w-full"
            aria-label="Book Now"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
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
        </div>
      </div>

      {/* Desktop Book Now Button */}
      <a
        href="https://direct-book.com/properties/OasisHotel"
        className="hidden sm:flex items-center py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-5 lg:py-3 lg:px-6 xl:py-3.5 xl:px-7 2xl:py-4 2xl:px-8 bg-[#D4A373] text-white no-underline font-['Open_Sans',_sans-serif] text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-medium rounded-sm hover:bg-[#C29360] focus:bg-[#C29360] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#D4A373] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap active:bg-[#B8845A]"
        aria-label="Book Now"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
        <svg 
          className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" 
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