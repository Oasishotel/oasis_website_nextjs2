import React from 'react';

const column1 = [
  'Whistling Straits - Golf Course',
  'Road America - Elkhart Lake',
  'Sheboygan County Fairgrounds',
  'Wisconsin Maritime Museum',
  'Milwaukee Mitchell International Airport',
  'Kettle Moraine State Park North',
  'Elkhart Lake',
];

const column2 = [
  'The Bull at Pinehurst Farms Golf Course',
  'Blue Harbor Resort & Conference Center Water Park',
  'Sheboygan County Airport',
  'Blackwolf Run',
  'Kettle Moraine State Park North',
];

const Landmark = () => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-[5%]"
      style={{ backgroundColor: 'rgba(0, 51, 102, 0.5)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
  
        <h2 className="font-['Montserrat',_sans-serif] text-lg sm:text-xl lg:text-[20px] font-bold uppercase text-[#FFFFFF] mb-2">
          Conveniently located in Sheboygan County, WI
        </h2>

        <h3 className="font-['Montserrat',_sans-serif] text-3xl sm:text-4xl lg:text-[48px] font-semibold uppercase text-[#FFFFFF] mb-6 sm:mb-8 leading-tight">
          In Driving <span className="text-[#D4A373]">Distance Of Plymouth WI</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          <ul className="space-y-2 sm:space-y-3 text-left">
            {column1.map((item, index) => (
              <li
                key={index}
                className="flex items-center relative pl-6 sm:pl-8 before:content-['—'] before:absolute before:left-0 before:text-[#D4A373] before:font-bold before:w-4 sm:before:w-6 before:text-center"
              >
                <span className="font-['Open_Sans',_sans-serif] text-base sm:text-lg lg:text-[22px] text-[#E8E8E8]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 sm:space-y-3 text-left">
            {column2.map((item, index) => (
              <li
                key={index}
                className="flex items-center relative pl-6 sm:pl-8 before:content-['—'] before:absolute before:left-0 before:text-[#D4A373] before:font-bold before:w-4 sm:before:w-6 before:text-center"
              >
                <span className="font-['Open_Sans',_sans-serif] text-base sm:text-lg lg:text-[22px] text-[#E8E8E8]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a
            href="https://direct-book.com/properties/OasisHotel"
            className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-[#D4A373] text-[#FFFFFF] font-['Open_Sans',_sans-serif] text-sm sm:text-base lg:text-[18px] font-bold uppercase tracking-wider no-underline transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-md transform hover:-translate-y-1"
          >
            Book a Room Today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landmark;