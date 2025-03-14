import React from 'react';

const LocationFlagsPing = () => {
  const locations = [
    { country: 'us', city: 'California', ping: '91ms', active: true },
    { country: 'us', city: 'Texas', ping: '91ms', active: false },
    { country: 'us', city: 'Miami', ping: '91ms', active: false },
    { country: 'us', city: 'NY', ping: '91ms', active: false },
    { country: 'nl', city: 'Amsterdam', ping: '91ms', active: false },
  ];

  return (
    <div className="flex justify-center gap-0 mt-[30px] w-full max-w-[75%] mx-auto bg-[#030319] rounded-[10px] p-3 shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden border border-white/5">
      {locations.map((location, index) => (
        <button 
          key={index}
          className={`
            flex-1 flex items-center justify-center whitespace-nowrap 
            ${location.active ? 'bg-[#0088ff]' : 'bg-transparent'} 
            text-white border-none py-1.5 px-2.5 text-[0.8rem] cursor-pointer 
            font-medium font-['Rajdhani'] rounded-[6px] mx-[3px] relative 
            uppercase tracking-[0.5px] h-[30px] hover:bg-white/10 transition-colors duration-300
            ${index < locations.length - 1 ? 'after:content-[\'\'] after:absolute after:right-[-3px] after:top-[25%] after:h-[50%] after:w-[1px] after:bg-white/10' : ''}
          `}
        >
          <img 
            src={`/flags/${location.country}.svg`} 
            alt={`${location.country === 'us' ? 'US' : 'Netherlands'} Flag`} 
            className="w-4 h-3 mr-[3px]" 
          /> 
          {location.city} {location.ping} 
          <span className="text-[0.6rem] ml-[3px] opacity-70 inline-block rotate-90 hover:animate-spin">↻</span>
        </button>
      ))}
    </div>
  );
};

export default LocationFlagsPing;