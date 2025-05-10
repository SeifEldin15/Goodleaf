import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsLoaded(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px', // Start loading when image is 200px from viewport
      threshold: 0.1
    });
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <div ref={imgRef} className={className}>
      {isLoaded ? (
        <img 
          src={src} 
          alt={alt} 
          className={className} 
          {...props} 
        />
      ) : (
        <div 
          className={`${className} bg-gray-200 animate-pulse`} 
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LazyImage; 