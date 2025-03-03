import React from 'react';

const Map = () => {
  // Data for the locations with coordinates and ping times
  const locations = [
    { name: 'Miami', country: 'US', lat: 25.7617, lng: -80.1918, ping: '9ms' },
    { name: 'New York', country: 'US', lat: 40.7128, lng: -74.0060, ping: '9ms' },
    { name: 'Texas', country: 'US', lat: 31.9686, lng: -99.9018, ping: '9ms' },
    { name: 'California', country: 'US', lat: 36.7783, lng: -119.4179, ping: '9ms' },
    { name: 'Amsterdam', country: 'NL', lat: 52.3676, lng: 4.9041, ping: '9ms' }
  ];

  // Function to convert lat/lng to SVG coordinates (simplified)
  const coordToSVG = (lat, lng, width = 1000, height = 500) => {
    // Convert lat/lng to x/y coords (simple Mercator-like projection)
    const x = (lng + 180) * (width / 360);
    const y = (90 - lat) * (height / 180);
    return { x, y };
  };

  return (
    <div className="relative  text-white py-12">

<div className="flex items-center justify-center mb-2 max-w-2xl mx-auto mt-12">
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-transparent via-[#1D8FEF] to-[#1D8FEF]" />
        <div className="mx-4">
        <img className='w-6' src="/header icons/review-icon.png" alt="" />
        </div>
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-[#1D8FEF] via-[#1D8FEF] to-transparent" />
      </div>

      <div className="flex flex-col items-center mb-12">


     <div className="flex items-center justify-center mb-2 max-w-2xl mx-auto">

      </div>        
        <p className="text-center max-w-3xl px-4">
          Our global data centers optimize performance and ensure fast, reliable access,
          reducing latency and improving user experience with seamless service, wherever
          you are.
        </p>
      </div>

      {/* Location Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {locations.map((location) => (
          <div key={location.name} className="flex items-center bg-black/30 rounded-full px-3 py-1 border border-gray-700">
            <span className="mr-2">
              {location.country === 'US' ? '🇺🇸' : location.country === 'NL' ? '🇳🇱' : ''}
            </span>
            <span className="font-medium">{location.name}</span>
            <span className="ml-2 text-xs text-blue-400">{location.ping}</span>
            <svg className="w-4 h-4 ml-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        ))}
      </div>

      {/* World Map SVG */}
      <div className="w-full overflow-hidden relative">
        <img 
          src="/map.png" 
          alt="World Map" 
          className="w-full h-auto"
        />
        <svg 
          viewBox="0 0 1000 500" 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
        </svg>
      </div>
    </div>
  );
};

export default Map;
