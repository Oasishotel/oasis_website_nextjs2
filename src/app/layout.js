import './globals.css';
import { Inter, Playfair_Display, Montserrat, Open_Sans } from 'next/font/google';

// ✅ Optimized font loading with preload for better performance
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

// ✅ Enhanced metadata with comprehensive SEO optimization
export const metadata = {
  title: {
    template: '%s | The Oasis Hotel Sheboygan Falls Wisconsin',
    default: 'The Oasis Hotel Sheboygan Falls | Premier Wisconsin Hotel Near Road America'
  },
  
  description: 'The Oasis Hotel in Sheboygan Falls, Wisconsin offers premier accommodations with renovated rooms, full-service bar, indoor pool, and pet-friendly amenities. Perfect location near Road America racing circuit, Lake Michigan, and Wisconsin attractions.',
  
  keywords: [
    'Oasis Hotel Sheboygan Falls',
    'Wisconsin hotels near Road America', 
    'Sheboygan Falls accommodations',
    'best hotel Sheboygan WI',
    'pet friendly hotel Wisconsin',
    'Lake Michigan hotels',
    'racing weekend accommodations',
    'business travel Sheboygan',
    'family hotel Wisconsin',
    'renovated hotel rooms Sheboygan Falls',
    'indoor pool hotel Wisconsin',
    'full service bar hotel'
  ].join(', '),
  
  authors: [{ name: 'The Oasis Hotel' }],
  creator: 'The Oasis Hotel Wisconsin',
  publisher: 'The Oasis Hotel',
  
  metadataBase: new URL("https://www.oasishotelwi.com"),
  
  alternates: {
    canonical: "https://www.oasishotelwi.com",
    languages: {
      'en-US': 'https://www.oasishotelwi.com',
    },
  },

  // ✅ Enhanced Open Graph with comprehensive social media optimization
  openGraph: {
    title: 'The Oasis Hotel Sheboygan Falls | Premier Wisconsin Hotel Near Road America',
    description: 'Experience premier accommodations at The Oasis Hotel - renovated rooms, indoor pool, full-service bar & ideal location near Road America. Book your Wisconsin getaway today!',
    url: 'https://www.oasishotelwi.com',
    siteName: 'The Oasis Hotel Wisconsin',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.oasishotelwi.com/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'The Oasis Hotel Sheboygan Falls Wisconsin - Premier Hotel Accommodations',
        type: 'image/png',
      },
      {
        url: 'https://www.oasishotelwi.com/assets/hotel-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'The Oasis Hotel Exterior View - Sheboygan Falls Wisconsin',
        type: 'image/jpeg',
      }
    ],
  },

  // ✅ Enhanced Twitter Cards for better social sharing
  twitter: {
    card: 'summary_large_image',
    site: '@OasisHotelWI',
    creator: '@OasisHotelWI',
    title: 'The Oasis Hotel Sheboygan Falls | Best Wisconsin Hotel Near Road America',
    description: 'Premier Wisconsin hotel featuring renovated rooms, indoor pool, full-service bar & pet-friendly amenities. Perfect location near Road America racing circuit & Lake Michigan.',
    images: {
      url: 'https://www.oasishotelwi.com/assets/logo.png',
      alt: 'The Oasis Hotel Sheboygan Falls Wisconsin',
    },
  },

  // ✅ Enhanced favicons and app icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#D4A373',
      },
    ],
  },

  // ✅ Enhanced manifest for PWA capabilities
  manifest: '/site.webmanifest',

  // ✅ Additional verification and SEO meta tags
  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code-here',
    bing: 'your-bing-verification-code-here',
  },

  // ✅ App-specific metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'The Oasis Hotel WI',
  },

  // ✅ Format detection and additional meta properties
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },

  // ✅ Category and classification
  category: 'travel',
  classification: 'hotel',
  
  // ✅ Additional SEO and business-specific metadata
  other: {
    // Geographic and location-based SEO
    'geo.region': 'US-WI',
    'geo.placename': 'Sheboygan Falls',
    'geo.position': '43.7311;-87.8118',
    'ICBM': '43.7311, -87.8118',
    
    // Business and industry-specific
    'business-type': 'hotel',
    'hotel-stars': '4',
    'price-range': '$$',
    'establishment': 'hotel',
    
    // Search engine directives
    'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'googlebot': 'index, follow',
    'bingbot': 'index, follow',
    
    // Social media and sharing
    'fb:app_id': 'your-facebook-app-id',
    'fb:pages': 'your-facebook-page-id',
    
    // Local business information
    'business-name': 'The Oasis Hotel',
    'business-address': '600 North Main Street, Sheboygan Falls, WI 53085',
    'business-phone': '(920) 467-4314',
    'business-email': 'info@theoasishotelwi.com',
    
    // Industry and services
    'services': 'hotel accommodation, event hosting, bar service, pool facilities',
    'target-audience': 'travelers, families, business guests, racing enthusiasts',
    
    // Content and page information
    'content-language': 'en-US',
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '7 days',
    
    // Mobile and device optimization
    'mobile-web-app-capable': 'yes',
    'mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-title': 'Oasis Hotel WI',
    
    // Theme and branding
    'theme-color': '#D4A373',
    'msapplication-TileColor': '#D4A373',
    'msapplication-config': '/browserconfig.xml',
    
    // Performance and caching hints
    'dns-prefetch': 'true',
    'preconnect': 'https://fonts.googleapis.com',
    
    // Accessibility
    'color-scheme': 'light',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D4A373' },
    { media: '(prefers-color-scheme: dark)', color: '#D4A373' }
  ],
};

export default function RootLayout({ children }) {
  const fontVariables = `${inter.variable} ${playfairDisplay.variable} ${montserrat.variable} ${openSans.variable}`;
  
  return (
    <html lang="en-US" className={fontVariables} dir="ltr">
      <head>
        {/* ✅ Enhanced DNS prefetching and preconnections for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* ✅ Enhanced SEO and crawler directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        
        {/* ✅ Enhanced authorship and publication info */}
        <meta name="author" content="The Oasis Hotel Wisconsin" />
        <meta name="publisher" content="The Oasis Hotel" />
        <meta name="copyright" content="© 2024 The Oasis Hotel Wisconsin" />
        
        {/* ✅ Enhanced geographic and location targeting */}
        <meta name="geo.region" content="US-WI" />
        <meta name="geo.placename" content="Sheboygan Falls, Wisconsin" />
        <meta name="geo.position" content="43.7311;-87.8118" />
        <meta name="ICBM" content="43.7311, -87.8118" />
        <meta name="location" content="Sheboygan Falls, Wisconsin, United States" />
        
        {/* ✅ Business and industry classification */}
        <meta name="classification" content="Hotel, Accommodation, Lodging, Tourism" />
        <meta name="category" content="Travel, Hospitality, Tourism" />
        <meta name="industry" content="Hospitality" />
        <meta name="business-type" content="Hotel" />
        
        {/* ✅ Content and language specifications */}
        <meta name="content-language" content="en-US" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* ✅ Enhanced mobile and app directives */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-title" content="Oasis Hotel WI" />
        
        {/* ✅ Windows/Microsoft specific meta tags */}
        <meta name="msapplication-TileColor" content="#D4A373" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tooltip" content="The Oasis Hotel - Wisconsin" />
        <meta name="msapplication-starturl" content="https://www.oasishotelwi.com" />
        
        {/* ✅ Apple-specific enhancements */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Oasis Hotel WI" />
        <meta name="apple-touch-fullscreen" content="yes" />
        
        {/* ✅ Enhanced cache control and performance hints */}
        <meta httpEquiv="cache-control" content="public, max-age=3600" />
        <meta httpEquiv="expires" content="3600" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ✅ Security headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        
        {/* ✅ Hotel-specific structured data hints */}
        <meta name="hotel-name" content="The Oasis Hotel" />
        <meta name="hotel-location" content="Sheboygan Falls, Wisconsin" />
        <meta name="hotel-phone" content="(920) 467-4314" />
        <meta name="hotel-email" content="info@theoasishotelwi.com" />
        <meta name="hotel-checkin" content="15:00" />
        <meta name="hotel-checkout" content="11:00" />
        <meta name="hotel-amenities" content="Pool, Bar, Wi-Fi, Parking, Pet-Friendly" />
        
        {/* ✅ Local business and service area */}
        <meta name="service-area" content="Sheboygan County, Wisconsin" />
        <meta name="nearby-attractions" content="Road America, Lake Michigan, Sheboygan Falls" />
        
        {/* ✅ Performance optimization preloads */}
        <link rel="preload" href="/assets/logo.png" as="image" type="image/png" />
        
        {/* ✅ Canonical link enforcement */}
        <link rel="canonical" href="https://www.oasishotelwi.com" />
        
        {/* ✅ Hreflang for language/region targeting */}
        <link rel="alternate" hrefLang="en-US" href="https://www.oasishotelwi.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.oasishotelwi.com" />
      </head>
      
      <body 
        className={inter.className} 
        suppressHydrationWarning={true}
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        {/* ✅ Skip navigation for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white p-2 rounded">
          Skip to main content
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* ✅ Performance monitoring (add your analytics code here) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4 - Replace GA_MEASUREMENT_ID with your actual ID
              // gtag('config', 'GA_MEASUREMENT_ID');
              
              // Optional: Add your analytics or tracking code here
              console.log('The Oasis Hotel - Website loaded successfully');
            `,
          }}
        />
      </body>
    </html>
  );
}