import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = ({ id }) => {
  return (
    <section
      id={id}
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/assets/background.jpg.jpg")' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 z-10 py-20 lg:py-24">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h1 className="font-playfair-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-4">
            The Oasis Hotel in Sheboygan Falls, WI
          </h1>
          <h2 className="mb-6">
            <span className="font-montserrat font-bold uppercase text-4xl sm:text-5xl md:text-6xl leading-tight block">
              Your Home Away
            </span>
            <span className="font-montserrat font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl text-[#D4A373] block">
              From Home.
            </span>
          </h2>
          <p className="font-open-sans text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            Now fully renovated and under new ownership, The Oasis is conveniently located in Sheboygan Falls, and not too far from Plymouth, Elkhart Lake & Kohler, WI. We offer many amenities such as a bar and pool to enhance your stay and are within driving distance from Road America and many other attractions.
          </p>
          <Link
            href="https://direct-book.com/properties/OasisHotel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-open-sans inline-flex items-center py-3 px-6 bg-transparent text-white border border-[#E8D5B5] no-underline text-base sm:text-lg hover:pr-8 transition-all duration-300 relative group"
          >
            Book Now
            <span className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">→</span>
          </Link>
        </div>

        {/* Image Container with Wooden Texture Background */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[40%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] relative mt-8 lg:mt-0">
          {/* Wooden Texture Background */}
          <div 
            className="absolute w-full h-full right-0 z-0 bg-[#A68B5A] bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url('/assets/wooden-texture.jpg.png')` }}
          />
          
          {/* Room Image - Positioned to overlap the wooden background */}
          <div className="absolute w-full h-full top-1/2 left-[-5%] sm:left-[-10%] transform -translate-y-1/2 z-10">
            <Image
              src="/assets/King-Whirlpool-Room.jpg"
              alt="King Whirlpool Room"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;