import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactUsSection = ({ id }) => {
  return (
    <section
      id={id}
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/assets/contact_image.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 bg-black/70 rounded-lg py-8 px-6 sm:py-12 sm:px-8 md:px-12 lg:px-16 max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 border-b-[8px] border-[#D4A373]">
  
        <div className="flex items-center justify-center sm:col-span-2 lg:col-span-1 order-1">
          <div className="relative h-[80px] sm:h-[100px] w-auto">
            <Image 
              src="/assets/logo.png" 
              alt="The Oasis Logo" 
              width={200}
              height={100}
              className="h-[80px] sm:h-[100px] w-auto object-contain"
              sizes="(max-width: 640px) 200px, 250px"
            />
          </div>
        </div>

        {/* Location - Full width on mobile, then 1st column */}
        <div className="text-white font-open-sans text-base sm:text-[18px] text-center sm:text-left order-3 lg:order-2">
          <h3 className="font-bold uppercase text-lg sm:text-[20px] mb-2">Our Location</h3>
          <p>600 North Main Street</p>
          <p>Sheboygan Falls, WI</p>
          <p>53085</p>
        </div>

        {/* Contact - Full width on mobile, then 2nd column */}
        <div className="text-white font-open-sans text-base sm:text-[18px] text-center sm:text-left order-4 lg:order-3">
          <h3 className="font-bold uppercase text-lg sm:text-[20px] mb-2">Contact</h3>
          <p>(920) 467-4314</p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <Link
              href="mailto:info@theoasishotelwi.com"
              className="inline-block py-2 px-4 sm:py-2 sm:px-5 bg-[#D4A373] text-white no-underline font-open-sans text-sm sm:text-base transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-md whitespace-nowrap"
            >
              info@theoasishotelwi.com
            </Link>
          </div>
        </div>

        {/* Check-In/Out and Book Now - Full width on mobile, then spans two columns */}
        <div className="text-white font-open-sans text-base sm:text-[18px] text-center sm:text-left order-2 sm:order-4 sm:col-span-2 lg:col-span-1 lg:order-4">
          <div className="mb-4">
            <p className="font-bold uppercase text-lg sm:text-[20px]">Check In 3 PM</p>
            <p className="font-bold uppercase">Check Out 11 AM</p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link
              href="https://direct-book.com/properties/OasisHotel"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block py-2 px-4 sm:py-2 sm:px-5 bg-transparent text-white border border-[#E8D5B5] no-underline font-open-sans text-sm sm:text-base hover:pr-8 sm:hover:pr-[30px] transition-all duration-300 relative after:content-['▶'] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-[#E8D5B5] after:opacity-0 hover:after:opacity-100"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;