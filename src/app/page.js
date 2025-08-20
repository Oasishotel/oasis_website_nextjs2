import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StayWithUs from '@/components/StayWithUsSection';
import OurRooms from '@/components/OurRooms';
import Testimonial from '@/components/Testimonial';
import Amenities from '@/components/Amenities';
import Landmark from '@/components/Landmark';
import ContactUsSection from '@/components/ContactUsSection';
import ScrollToTop from '@/components/ScrollToTop';

// ✅ Enhanced Page-level SEO metadata with location-specific targeting
export const metadata = {
  title: 'The Oasis Hotel Sheboygan Falls | Best Hotel Near Road America Wisconsin',
  description:
    'Experience The Oasis Hotel in Sheboygan Falls, WI - Premier accommodations with renovated rooms, full-service bar, indoor pool, and pet-friendly amenities. Just minutes from Road America racing circuit and Lake Michigan attractions.',
  keywords:
    'Oasis Hotel Sheboygan Falls WI, hotels near Road America Wisconsin, best hotel Sheboygan Falls, Wisconsin lodging accommodations, family friendly hotel Sheboygan, business travel Wisconsin, pet friendly hotel near Road America, Lake Michigan hotels, Sheboygan Falls accommodations, racing weekend hotels Wisconsin',
  
  // Enhanced Open Graph for better social sharing
  openGraph: {
    title: 'The Oasis Hotel Sheboygan Falls | Premier Wisconsin Hotel Near Road America',
    description: 'Discover comfort at The Oasis Hotel - renovated rooms, pool, bar & prime location near Road America. Book your Wisconsin getaway today!',
    url: 'https://www.oasishotelwi.com',
    siteName: 'The Oasis Hotel Wisconsin',
    images: [
      {
        url: 'https://www.oasishotelwi.com/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'The Oasis Hotel Sheboygan Falls Wisconsin - Premier Accommodations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Enhanced Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@OasisHotelWI',
    title: 'The Oasis Hotel Sheboygan Falls | Best Hotel Near Road America',
    description: 'Premier Wisconsin hotel with renovated rooms, pool, bar & pet-friendly amenities. Perfect location near Road America racing circuit.',
    images: ['https://www.oasishotelwi.com/assets/logo.png'],
  },

  // Additional SEO enhancements
  alternates: {
    canonical: 'https://www.oasishotelwi.com',
  },
  
  other: {
    'geo.region': 'US-WI',
    'geo.placename': 'Sheboygan Falls',
    'geo.position': '43.7311;-87.8118',
    'ICBM': '43.7311, -87.8118',
    'hotel-id': 'oasis-hotel-sheboygan-falls',
  },
};

// ✅ Enhanced Hotel Schema with comprehensive business information
function HotelSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://www.oasishotelwi.com/#hotel",
    name: "The Oasis Hotel",
    alternateName: "Oasis Hotel Sheboygan Falls",
    description: "Premier hotel in Sheboygan Falls, Wisconsin offering renovated accommodations, full-service bar, indoor pool, and pet-friendly amenities near Road America racing circuit.",
    image: [
      "https://www.oasishotelwi.com/assets/logo.png",
      "https://www.oasishotelwi.com/assets/hotel-exterior.jpg",
      "https://www.oasishotelwi.com/assets/hotel-rooms.jpg"
    ],
    logo: "https://www.oasishotelwi.com/assets/logo.png",
    url: "https://www.oasishotelwi.com",
    telephone: "+1-920-467-4314",
    email: "info@theoasishotelwi.com",
    
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 North Main Street",
      addressLocality: "Sheboygan Falls",
      addressRegion: "WI",
      postalCode: "53085",
      addressCountry: "US"
    },
    
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7311,
      longitude: -87.8118
    },
    
    hasMap: "https://maps.google.com/?q=600+North+Main+Street,+Sheboygan+Falls,+WI+53085",
    
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    
    checkinTime: "15:00",
    checkoutTime: "11:00",
    
    amenityFeature: [
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Free Wi-Fi", 
        value: true 
      },
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Indoor Swimming Pool", 
        value: true 
      },
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Full-Service Bar & Lounge", 
        value: true 
      },
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Pet Friendly Accommodations", 
        value: true 
      },
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Free Parking", 
        value: true 
      },
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Business Center", 
        value: true 
      },
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Event Spaces", 
        value: true 
      },
      { 
        "@type": "LocationFeatureSpecification", 
        name: "Air Conditioning", 
        value: true 
      }
    ],
    
    starRating: {
      "@type": "Rating",
      ratingValue: "4"
    },
    
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    
    containsPlace: [
      {
        "@type": "Restaurant",
        name: "Oasis Bar & Lounge"
      }
    ],
    
    nearbyAttraction: [
      {
        "@type": "TouristAttraction",
        name: "Road America",
        description: "Premier road racing facility"
      },
      {
        "@type": "BodyOfWater",
        name: "Lake Michigan",
        description: "Great Lakes waterfront attractions"
      }
    ],
    
    sameAs: [
      "https://www.facebook.com/oasishotelwi",
      "https://www.instagram.com/oasishotelwi",
      "https://www.google.com/maps/place/The+Oasis+Hotel"
    ],
    
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://direct-book.com/properties/OasisHotel",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      result: {
        "@type": "LodgingReservation",
        name: "Hotel Room Reservation"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ✅ Local Business Schema for enhanced local SEO
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.oasishotelwi.com/#localbusiness",
    name: "The Oasis Hotel",
    description: "Premier hotel accommodations in Sheboygan Falls, Wisconsin",
    url: "https://www.oasishotelwi.com",
    telephone: "+1-920-467-4314",
    email: "info@theoasishotelwi.com",
    
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 North Main Street",
      addressLocality: "Sheboygan Falls",
      addressRegion: "Wisconsin",
      postalCode: "53085",
      addressCountry: "United States"
    },
    
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7311,
      longitude: -87.8118
    },
    
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    
    areaServed: [
      "Sheboygan Falls",
      "Sheboygan",
      "Plymouth",
      "Kohler", 
      "Wisconsin"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ✅ Breadcrumb Schema for better navigation understanding
function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Wisconsin Hotels",
        "item": "https://www.oasishotelwi.com/wisconsin-hotels"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sheboygan Falls Hotels",
        "item": "https://www.oasishotelwi.com/sheboygan-falls-hotels"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "The Oasis Hotel",
        "item": "https://www.oasishotelwi.com"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        {/* Enhanced semantic HTML structure for better SEO */}
        <article>
          <header>
            <HeroSection id="hero" />
          </header>
          
          <section id="about" aria-labelledby="about-heading">
            <StayWithUs />
          </section>
          
          <section id="rooms" aria-labelledby="rooms-heading">
            <OurRooms />
          </section>
          
          <section id="testimonials" aria-labelledby="testimonials-heading">
            <Testimonial />
          </section>
          
          <section id="amenities" aria-labelledby="amenities-heading">
            <Amenities />
          </section>
          
          <section id="landmark" aria-labelledby="landmark-heading">
            <Landmark />
          </section>
          
          <section id="contact" aria-labelledby="contact-heading">
            <ContactUsSection />
          </section>
        </article>
      </main>

      {/* ✅ Inject comprehensive schemas for enhanced SEO */}
      <HotelSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema />
    </>
  );
}