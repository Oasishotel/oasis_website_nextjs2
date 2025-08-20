import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = ({ id }) => {
  return (
    <section
      id={id}
      className="relative flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-8 md:gap-12 h-[120vh] sm:h-[100vh] px-[3%] sm:px-[5%] bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/background.jpg.jpg')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>

      {/* Left Side: Text Content */}
      <div className="w-full sm:w-[55%] text-white z-[2] mt-[80px] sm:mt-[120px] md:mt-[150px]">
        <h1 className="font-playfair-display font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-tight">
          The Oasis Hotel in Sheboygan Falls, WI
        </h1>
        <h2 className="mb-3 sm:mb-5">
          <span className="font-montserrat font-bold uppercase text-[40px] sm:text-[50px] md:text-[60px] leading-tight">
            Your Home Away
          </span>
          <br />
          <span className="font-montserrat font-extrabold uppercase text-[40px] sm:text-[50px] md:text-[60px] leading-tight text-[#D4A373]">
            From Home.
          </span>
        </h2>
        <p className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[500px] sm:max-w-[600px] text-[#B0B0B0] mb-6 sm:mb-8 md:mb-10">
          Now fully renovated and under new ownership, The Oasis is conveniently located in Sheboygan Falls, and not too far from Plymouth, Elkhart Lake & Kohler, WI. We offer many amenities such as a bar and pool to enhance your stay and are within driving distance from Road America and many other attractions.
        </p>
        <Link
          href="https://direct-book.com/properties/OasisHotel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-1.5 sm:py-2 px-3 sm:px-4 bg-transparent text-white border border-[#E8D5B5] no-underline font-open-sans text-xs sm:text-sm hover:pr-6 sm:hover:pr-8 transition-all duration-300 relative after:content-['→'] after:absolute after:right-1 sm:after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-[#E8D5B5] after:opacity-0 hover:after:opacity-100 hover:after:right-2 sm:hover:after:right-4"
        >
          Book Now
        </Link>
      </div>

      {/* Right Side: Wooden Texture with Room Image */}
      <div className="w-[80%] sm:w-[50%] md:w-[35%] h-[40%] sm:h-[50%] md:h-[60%] relative overflow-visible mt-6 sm:mt-[120px] md:mt-[150px] mx-auto sm:mx-0">
        <div
          className="absolute w-full h-full right-0 z-[1] bg-[#A68B5A] bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url('/assets/wooden-texture.jpg.png')`,
            backgroundBlendMode: 'overlay',
          }}
        />
        <div className="absolute w-full h-full top-1/2 left-[-5%] sm:left-[-10%] transform -translate-y-1/2 z-[2]">
          <Image
            src="/assets/King-Whirlpool-Room.jpg"
            alt="King Whirlpool Room"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, 35vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;