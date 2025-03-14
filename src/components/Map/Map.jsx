import React, { useState, useEffect } from 'react';

const Map = () => {
  const [locations, setLocations] = useState([
    { name: 'Miami', country: 'US', lat: 25.7617, lng: -80.1918, endpoint: 'https://ping.mia.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'New York', country: 'US', lat: 40.7128, lng: -74.0060, endpoint: 'https://ping.nyc.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'Texas', country: 'US', lat: 31.9686, lng: -99.9018, endpoint: 'https://ping.dal.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'California', country: 'US', lat: 36.7783, lng: -119.4179, endpoint: 'https://ping.lax.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'Amsterdam', country: 'NL', lat: 52.3676, lng: 4.9041, endpoint: 'https://ping.ams.goodleafhosting.com/ping', ping: 'Loading...' }
  ]);

  const fetchPingData = async () => {
    const updatedLocations = [...locations];
    
    for (let i = 0; i < updatedLocations.length; i++) {
      try {
        const startTime = Date.now();
        const response = await fetch(updatedLocations[i].endpoint);
        const data = await response.json();
        const latency = data.latency || (Date.now() - startTime);
        updatedLocations[i].ping = `${latency}ms`;
        updatedLocations[i].latencyValue = latency;
      } catch (error) {
        console.error(`Error fetching ping for ${updatedLocations[i].name}:`, error);
        updatedLocations[i].ping = 'N/A';
        updatedLocations[i].latencyValue = null;
      }
    }
    
    setLocations(updatedLocations);
  };

  useEffect(() => {
    fetchPingData();
    const interval = setInterval(fetchPingData, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to convert lat/lng to SVG coordinates (simplified)
  const coordToSVG = (lat, lng, width = 1000, height = 500) => {
    // Convert lat/lng to x/y coords (simple Mercator-like projection)
    const x = (lng + 180) * (width / 360);
    const y = (90 - lat) * (height / 180);
    return { x, y };
  };

  const getPingColor = (latency) => {
    if (latency === null) return 'text-white';
    if (latency < 80) return 'text-blue-400';
    if (latency <= 120) return 'text-yellow-500';
    return 'text-red-500';
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
            <span className={`ml-2 text-xs ${getPingColor(location.latencyValue)}`}>
              {location.ping}
            </span>
            <svg className="w-4 h-4 ml-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        ))}
      </div>

      {/* World Map SVG */}
      <div className="w-full overflow-hidden relative md:max-w-[95%] lg:max-w-[85%] mx-auto">
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
