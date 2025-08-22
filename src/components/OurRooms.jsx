'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const rooms = [
  {
    name: 'Two Queen Bed',
    images: ['/assets/QueenBed1.jpeg', '/assets/QueenBed2.jpeg', '/assets/QueenBed3.jpeg'],
    description: 'This room offers two comfortable Queen Beds, complimentary Wi-Fi, free local calls, a desk with a chair, a phone, and a range of amenities for your convenience. Enjoy the convenience of a refrigerator and coffeemaker in the room, along with a hairdryer, iron/ironing board, and an alarm clock. Maintain your preferred climate with the self-controlled AC/Heat system. Additionally, take advantage of wake-up call services to start your day on time.'
  },
  {
    name: 'One King Bed',
    images: ['/assets/kingBed1.jpeg', '/assets/kingbed2.jpeg'],
    description: 'This inviting room boasts a comfortable King Bed, complimentary Wi-Fi, free local calls, a well-appointed desk with a chair, and essential amenities including a phone, refrigerator, coffeemaker, hairdryer, iron/ironing board, and an alarm clock. Take control of your comfort with the self-regulated AC/Heat system, and ensure a timely start to your day with the convenient wake-up call services.'
  },
  {
    name: 'Double Queen Family Suite',
    images: ['/assets/DoubleQueen1.jpeg', '/assets/DoubleQueen2.jpeg', '/assets/DoubleQueen3.jpeg', '/assets/DoubleQueen4.jpeg'],
    description: 'Spacious suite featuring two Queen beds, a pull out loveseat, complimentary Wi-Fi, and free local calls. The room is equipped with a desk and chair, Jet Shower, and phone. Additionally, enjoy the convenience of a full kitchenette complete with cabinetry, refrigerator, and coffeemaker. For added convenience, amenities such as a hairdryer, iron/ironing board, and an alarm clock are provided. Take control of your well-being with the self-controlled AC/Heat system, ensuring a soothing stay.'
  },
  {
    name: 'One King Bed Accessible',
    images: ['/assets/OneKingBed1.jpeg', '/assets/OneKingBed2.jpeg', '/assets/OneKingBed3.jpeg'],
    description: 'Accessible Room with 1 King Bed offers complimentary Wi-Fi, free local calls, a desk with a chair, and essential amenities like a phone, refrigerator, coffeemaker, hairdryer, iron/ironing board, and an alarm clock. Guests can regulate their own comfort with the self-controlled AC/Heat system, and wake up promptly with the available wake-up call services.'
  },
  {
    name: 'King Suite Whirlpool',
    images: ['/assets/WhirlPool1.jpeg', '/assets/WhirlPool2.jpeg', '/assets/WhirlPool3.jpeg'],
    description: 'This suite features a luxurious King Bed, complimentary Wi-Fi, free local calls, a desk with a chair, and a relaxing whirlpool. Additionally, amenities include a phone, refrigerator, coffeemaker, hairdryer, iron/ironing board, and an alarm clock. Guests can manage their own climate with the self-controlled AC/Heat system, and enjoy the convenience of wake-up call services.'
  },
];

// Custom Image Slider Component with Touch Support
const ImageSlider = ({ images, roomName, roomIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      // Swipe left
      goToNext();
    } else if (endX - startX > 50) {
      // Swipe right
      goToPrev();
    }
    // Reset auto-play after a short delay
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div 
      className="relative h-full overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      {/* Images */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 transform translate-x-0' 
                : index < currentIndex 
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            <Image
              src={image}
              alt={`${roomName} - ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              priority={roomIndex === 0 && index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only show on hover and desktop */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white w-3 h-3' 
                  : 'bg-gray-300 opacity-70 hover:opacity-90'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const OurRooms = ({ id }) => {
  return (
    <section id={id} className="bg-[#F8F1E5] py-12 sm:py-16 lg:py-20 px-4 sm:px-[5%] min-h-screen">
      <div className="md:flex md:items-start md:gap-8 max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="md:w-1/3 md:sticky md:top-0 p-4 mb-8 md:mb-0">
          <h2 className="font-open-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0c0c0c] mb-2 leading-tight tracking-wide">
            Our Rooms
          </h2>
          <h3 className="font-open-sans font-normal text-2xl sm:text-3xl lg:text-[32px] text-[#D4A373] mb-4">
            Great Comfort
          </h3>
          <p className="font-open-sans text-base sm:text-[18px] text-[#555] leading-relaxed">
            The Oasis has many room options with two beds, double queen family suite, king beds and more. Each room is equipped with a flat-screen TV featuring cable channels and a coffee maker for your convenience. We ensure that every room is furnished with fresh and comfortable bed linens and towels. Guests can indulge in a complimentary breakfast, truly transforming The Oasis into your "home away from home."
          </p>
        </div>

        {/* Right Column - Room Cards */}
        <div className="md:w-2/3">
          <div className="space-y-8 sm:space-y-12">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Room Image Slider */}
                <div className="h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden relative">
                  <ImageSlider 
                    images={room.images} 
                    roomName={room.name}
                    roomIndex={index}
                  />
                </div>
                
                {/* Room Details */}
                <div className="mt-4 sm:mt-6">
                  <h4 className="font-open-sans font-bold text-2xl sm:text-2xl lg:text-[26px] text-[#D4A373] text-center mb-3">
                    {room.name}
                  </h4>
                  <p className="font-open-sans text-[17px] sm:text-[18px] text-[#555] text-center leading-relaxed mb-4">
                    {room.description}
                  </p>
                  <div className="text-center">
                    <Link
                      href="https://direct-book.com/properties/OasisHotel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2.5 px-5 sm:py-3 sm:px-7 bg-[#D4A373] text-white font-open-sans text-base font-bold uppercase tracking-wider no-underline rounded-md transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-md transform hover:-translate-y-0.5"
                    >
                      Book Room
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRooms;