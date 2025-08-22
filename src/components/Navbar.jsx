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
    <nav className="flex flex-col sm:flex-row justify-between items-center py-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-transparent absolute w-full top-0 z-50">
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
            className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto transition-all duration-300" 
            width={180}
            height={60}
            priority
          />
        </Link>
        
        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:ring-offset-2 focus:ring-offset-transparent rounded-sm z-50 p-1.5 transition-colors duration-200 hover:text-[#D4A373]"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
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
        className={`fixed sm:static top-0 right-0 h-screen sm:h-auto w-3/4 max-w-xs sm:w-auto bg-gray-900 sm:bg-transparent z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        } transition-transform duration-300 ease-in-out flex flex-col sm:flex-row`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row items-center list-none sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 font-open-sans h-full pt-20 sm:pt-0 px-6 sm:px-0">
          {['About Us', 'Our Rooms', 'Amenities', 'Contact'].map((item, index) => {
            const href = `#${item.toLowerCase().replace(' ', '-')}`;
            return (
              <li key={index} className="w-full sm:w-auto whitespace-nowrap">
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="text-white no-underline hover:text-[#D4A373] focus:text-[#D4A373] focus:outline-none transition-colors duration-300 block py-4 sm:py-2 border-b border-gray-700 sm:border-0 text-lg sm:text-base md:text-lg font-medium"
                  aria-label={`${item} section`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Book Now Button */}
        <div className="mt-auto p-6 sm:hidden border-t border-gray-700">
          <a
            href="https://direct-book.com/properties/OasisHotel"
            className="flex items-center justify-center py-3 px-6 bg-[#D4A373] text-white no-underline font-open-sans text-base font-semibold rounded-sm hover:bg-[#C29360] focus:bg-[#C29360] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 w-full"
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
        className="hidden sm:flex items-center py-2.5 px-4 md:py-3 md:px-5 lg:py-3 lg:px-6 bg-[#D4A373] text-white no-underline font-open-sans text-sm md:text-base font-medium rounded-sm hover:bg-[#C29360] focus:bg-[#C29360] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 whitespace-nowrap"
        aria-label="Book Now"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
        <svg 
          className="ml-2 h-4 w-4 md:h-5 md:w-5" 
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