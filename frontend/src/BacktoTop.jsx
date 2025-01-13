import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const listenToScroll = () => {
    const heightToShow = 250;
    const winScroll = 
      document.body.scrollTop || document.documentElement.scrollTop;
    
    setIsVisible(winScroll > heightToShow);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 rounded-full 
                bg-gradient-to-r from-cyan-500 to-purple-500 
                shadow-lg transform transition-all duration-300
                hover:scale-110 hover:shadow-xl 
                animate-bounce
                group
                z-50"
      aria-label="Back to top"
    >
      <FaArrowUp  
        className="w-6 h-6 text-white 
                   group-hover:animate-pulse" 
      />
      <div className="absolute -top-1 -right-1 w-3 h-3 
                      bg-yellow-400 rounded-full 
                      animate-ping" />
    </button>
  );
};

export default BackToTop;