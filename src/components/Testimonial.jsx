'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "This is a great place to spend the night. It's reasonable, the reviews about good customer service are correct. My kids loved the pool. The breakfast is good. The room was clean and the beds were comfortable."
  },
  {
    quote: "A great place to stay. Everything is freshly remodeled and clean. The service was kind and courteous. We would definitely stay again!"
  },
  {
    quote: "This was my third stay here within a month and all the people working here are absolutely amazing and accommodating. They always helped me out when I needed something. Perfect. Perfect. Perfect."
  },
  {
    quote: "Very friendly staff and nicely updated facilities. The continental breakfast was simple- toast, bagels, pancakes, eggs and sausage, plus beverages. Our stay was very quiet and peaceful."
  },
  {
    quote: "The front desk lady was awesome. And the employee who got my Sour Patch Candy from the vending machine was a life saver. Will definitely stay again."
  },
  {
    quote: "Breakfast was very good & much appreciated. Room was comfortable, clean, and quiet. Even the A/C was quieter than most."
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFadeClass('opacity-100');
    }, 500);
  };

  const handlePrev = () => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFadeClass('opacity-100');
    }, 500);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeClass('opacity-100');
    }, 500);
  };

  return (
    <section
      className="relative bg-cover bg-center py-12 md:py-24"
      style={{ backgroundImage: `url(/assets/testimonialimage.jpeg)` }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Testimonial Content */}
        <div className="relative min-h-[180px] sm:min-h-[220px] md:min-h-[300px]">
          <div className="flex justify-center items-center h-full">
            <div 
              className={`transition-opacity duration-500 ease-in-out ${fadeClass} max-w-3xl mx-auto`}
            >
              <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-open-sans leading-relaxed relative py-4 md:py-8 text-white px-4">
                <span className="absolute -top-4 -left-2 sm:-top-5 sm:-left-4 text-4xl sm:text-5xl md:text-6xl text-[#D4A373]">"</span>
                {testimonials[currentIndex].quote}
                <span className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 text-4xl sm:text-5xl md:text-6xl text-[#D4A373]">"</span>
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200 ml-1 sm:ml-2 md:ml-4"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200 mr-1 sm:mr-2 md:mr-4"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 w-full text-center">
          <div className="inline-flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:ring-opacity-50 ${
                  index === currentIndex 
                    ? 'bg-[#D4A373] opacity-100' 
                    : 'bg-[#D4A373] opacity-50 hover:opacity-75'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;