'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StayWithUs = ({ id }) => {
  return (
    <section id={id} className="relative bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-[5%]">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A373] via-[#E8D5B5] to-[#D4A373]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          {/* Full-width content section */}
          <div className="bg-[#F8F1E5] p-6 sm:p-8 md:p-12">
            <div className="mb-6 sm:mb-8 md:mb-10 text-center">
              <h2 className="font-['Playfair_Display',_serif] text-2xl sm:text-3xl md:text-[42px] text-[#0c0c0c] mb-2 tracking-wide">
                STAY WITH US
              </h2>
              <h3 className="font-['Playfair_Display',_serif] text-xl sm:text-2xl md:text-[32px] text-[#D4A373] italic">
                Unparalleled Service
              </h3>
            </div>
            
            <p className="font-['Open_Sans',_sans-serif] text-base sm:text-[18px] text-[#555] mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto">
              The Oasis hotel in Sheboygan Falls Wisconsin, offers lodging options featuring a bar, pool, hot tub, laundry facilities, and complimentary private parking. Additionally, air-conditioned rooms equipped with free Wi-Fi are available. Guests can benefit from a 24-hour front desk and an on-site ATM for added convenience.
            </p>
            
            {/* Image Grid - Responsive layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 max-w-4xl mx-auto">
              <div className="group overflow-hidden">
                <div className="h-[220px] sm:h-[250px] md:h-[320px] overflow-hidden rounded-lg">
                  <Image 
                    src="/assets/barimage.jpeg" 
                    alt="Bar in Sheboygan Falls WI" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={490} // Reasonable default for grid layout
                    height={320} // Maintains aspect ratio for grid
                    priority
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-base sm:text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  Bar in Sheboygan Falls WI
                </p>
              </div>
              
              <div className="group overflow-hidden">
                <div className="h-[220px] sm:h-[250px] md:h-[320px] overflow-hidden rounded-lg">
                  <Image 
                    src="/assets/Front-desk-980x735.webp" 
                    alt="24-Hours Front Desk" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={980} // Based on original filename (980x735)
                    height={735} // Based on original filename (980x735)
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-base sm:text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  24-Hours Front Desk
                </p>
              </div>
              
              <div className="group overflow-hidden">
                <div className="h-[220px] sm:h-[250px] md:h-[320px] overflow-hidden rounded-lg">
                  <Image 
                    src="/assets/relaxing_lobby.jpeg" 
                    alt="Relaxing Lobby" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={490} // Reasonable default for grid layout
                    height={320} // Maintains aspect ratio for grid
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-base sm:text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  Relaxing Lobby
                </p>
              </div>
              
              <div className="group overflow-hidden">
                <div className="h-[220px] sm:h-[250px] md:h-[320px] overflow-hidden rounded-lg">
                  <Image 
                    src="/assets/Lobby-Vending-980x552.webp" 
                    alt="Complimentary Breakfast" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={980} // Based on original filename (980x552)
                    height={552} // Based on original filename (980x552)
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-base sm:text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  Complimentary Breakfast
                </p>
              </div>
            </div>
            
            {/* Book Now Button */}
            <div className="text-center">
              <Link
                href="https://direct-book.com/properties/OasisHotel"
                className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-[#D4A373] text-[#0c0c0c] font-['Open_Sans',_sans-serif] text-sm sm:text-base md:text-[18px] font-bold uppercase tracking-wider no-underline transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-lg transform hover:scale-105"
              >
                Book a Room Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayWithUs;