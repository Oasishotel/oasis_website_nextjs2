'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash navigation or scroll to top
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
        const offset = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;