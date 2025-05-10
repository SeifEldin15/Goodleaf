import React from 'react'
import { useLocation } from 'react-router-dom'

const HeroPartner = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationParam = searchParams.get('location')?.toLowerCase();
  
  // Determine which map to show based on URL query parameter
  const getMapImage = () => {
    if (locationParam === 'texas' || locationParam === 'tx') {
      return '/us-maps/tx.webp';
    } else if (locationParam === 'new-york' || locationParam === 'ny') {
      return '/us-maps/NY.webp';
    } else if (locationParam === 'florida' || locationParam === 'fl') {
      return '/us-maps/florida.webp';
    }
    return '/us-maps/us-map.webp';
  };

  const getLocationTitle = () => {
    if (locationParam === 'texas' || locationParam === 'tx') {
      return 'TEXAS';
    } else if (locationParam === 'new-york' || locationParam === 'ny') {
      return 'NEW YORK';
    } else if (locationParam === 'florida' || locationParam === 'fl') {
      return 'FLORIDA';
    }
    return 'Colocation';
  };

  return (
    <div>
      <div className="text-white py-16 px-2 max-w-[95%] md:max-w-[85%] lg:max-w-[85%] mx-auto w-full relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-[400px] mt-4 md:mt-8 gap-6">
          {/* Left Content - Vertically centered */}
          <div className="md:flex-1 max-w-xl">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 text-center md:text-left mt-10 md:mt-0 lg:mt-0">
              HOWDY <span className="text-[#0B7FE3]">{getLocationTitle()}</span>
            </h1>
            <p className="text-gray-300 mb-8 text-center md:text-left">
              Check out the services we offer below such as FiveM Server Hosting. We're
              determined to provide these services at the best quality - customer satisfaction and
              convenience are of the utmost importance for us.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <button className="bg-primary-gradient text-white px-4 md:px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm md:text-base">
                Learn more <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Image - Much bigger size and vertically centered */}
          <div className="md:flex-1 flex justify-center md:justify-end items-center">
            <div className="w-full max-w-[400px] md:max-w-[550px] lg:max-w-[650px] relative">
              {/* Blue glow effect behind the map */}
      
              
              <div className="w-full relative rounded-lg overflow-hidden z-10">
                <img 
                  src={getMapImage()} 
                  alt="Location Map" 
                  className="w-full object-contain h-auto max-h-[500px] relative z-10"
                />
              </div>
              
              {/* Location pins can be positioned absolutely */}
              {/* Example pin */}
              <div className="absolute top-1/4 right-1/3 text-[#0B7FE3] z-20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPartner
