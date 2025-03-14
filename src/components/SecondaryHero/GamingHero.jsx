import React, { useState, useEffect } from 'react'

function GamingHero() {
  // Array of background images
  const backgroundImages = [
    '/gaming-hero/gaming-hero-2.png',
    '/gaming-hero/gaming-hero-1.png',
    '/gaming-hero/gaming-hero-3.png',
    // Add more image paths as needed
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image rotation effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Top gradient overlay - semi-transparent black to transparent */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-black/70 to-transparent z-20"></div>
      
      {/* Bottom gradient overlay - semi-transparent black to transparent */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/70 to-transparent z-20"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000" 
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-30 container mx-auto px-6 h-full flex items-center max-w-[90%]">
        <div className="max-w-[90%]">
          {/* Heading */}
          <h1 className="leading-tight">
            <span className="text-blue-500 text-7xl font-bold block">FIVEM SERVER</span>
            <span className="text-white text-7xl font-bold block">HOSTING</span>
          </h1>
          
          {/* Description - tighter spacing */}
          <div className="mt-6 space-y-0">
            <p className="text-white text-3xl leading-tight font-bold">
              Get the best performance and security for your business with our 
            </p>
            <p className="text-white text-3xl leading-tight font-bold">
              dedicated servers.
            </p>
            <p className="text-white text-3xl leading-tight mt-3 font-bold">
              Customized plans are available upon contacting our team.
            </p>
          </div>
          
          {/* Trustpilot section */}
          <div className="mt-8">
            {/* Trustpilot logo and rating text */}
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="text-white text-2xl font-bold ml-2">Trustpilot</span>
              </div>
            </div>
            
            {/* Five star rating with text */}
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-9 w-9 bg-green-500 mr-1 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                ))}
              </div>
              <div className="ml-4 text-white">
                <p className="font-medium text-lg">Fast, Affordable, Game Servers</p>
                <p>Rated 4.8/5 by TrustPilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamingHero