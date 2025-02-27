import React from 'react';
import { FiRefreshCw } from 'react-icons/fi'; // For refresh icons
import { FaGlobe } from 'react-icons/fa'; // For globe icon
import Separator from '../Seperator/Seperator';

const Performance = () => {
  const locations = [
    { name: 'Miami', flag: '🇺🇸', pingTime: '91ms' },
    { name: 'New York', flag: '🇺🇸', pingTime: '91ms' },
    { name: 'Texas', flag: '🇺🇸', pingTime: '91ms' },
    { name: 'California', flag: '🇺🇸', pingTime: '91ms' },
    { name: 'Amsterdam', flag: '🇳🇱', pingTime: '91ms' },
  ];

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Globe Icon */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="absolute inset-0 border-t border-blue-500 top-1/2"></div>
            <div className="relative bg-black px-4">
              <FaGlobe className="h-8 w-8 text-blue-500 mx-auto" />
            </div>
          </div>
        </div>

        {/* Location Header */}
        <Separator />
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">GLOBAL PERFORMANCE</h2>
        
        {/* Description Text */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-center">
          Our global data centers optimize performance and ensure fast, reliable access,
          reducing latency and improving user experience with seamless service, wherever
          you are.
        </p>
        
        {/* Location Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center">
              <span className="mr-2 text-xl">{location.flag}</span>
              <span className="font-medium mr-2">{location.name}</span>
              <span className="text-blue-500">{location.pingTime}</span>
              <FiRefreshCw className="ml-1 text-blue-500 h-4 w-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
