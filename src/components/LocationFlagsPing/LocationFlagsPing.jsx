import React, { useState, useEffect } from 'react';

const LocationFlagsPing = () => {
  const [locations, setLocations] = useState([
    { country: 'us', city: 'Miami', endpoint: 'https://ping.mia.goodleafhosting.com/ping', ping: 'Loading...', active: false },
    { country: 'us', city: 'New York', endpoint: 'https://ping.nyc.goodleafhosting.com/ping', ping: 'Loading...', active: false },
    { country: 'us', city: 'Texas', endpoint: 'https://ping.dal.goodleafhosting.com/ping', ping: 'Loading...', active: false },
    { country: 'us', city: 'California', endpoint: 'https://ping.lax.goodleafhosting.com/ping', ping: 'Loading...', active: false },
    { country: 'nl', city: 'Amsterdam', endpoint: 'https://ping.ams.goodleafhosting.com/ping', ping: 'Loading...', active: false },
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
        console.error(`Error fetching ping for ${updatedLocations[i].city}:`, error);
        updatedLocations[i].ping = 'N/A';
        updatedLocations[i].latencyValue = null;
      }
    }
    
    // Find the lowest ping and set it as active
    const lowestPing = Math.min(...updatedLocations
      .filter(loc => loc.latencyValue !== null)
      .map(loc => loc.latencyValue));
    
    updatedLocations.forEach(loc => {
      loc.active = loc.latencyValue === lowestPing;
    });
    
    setLocations(updatedLocations);
  };

  useEffect(() => {
    // Initial fetch
    fetchPingData();

    // Set up interval to fetch every 3 seconds
    const interval = setInterval(() => {
      fetchPingData();
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array since we don't need to track any dependencies

  const getPingColor = (latency) => {
    if (latency === null) return 'text-white';
    if (latency < 80) return 'text-green-500';
    if (latency <= 120) return 'text-yellow-500';
    return 'text-red-500';
  };

  const refreshPing = async (index) => {
    try {
      const updatedLocations = [...locations];
      const startTime = Date.now();
      const response = await fetch(updatedLocations[index].endpoint);
      const data = await response.json();
      const latency = data.latency || (Date.now() - startTime);
      updatedLocations[index].ping = `${latency}ms`;
      updatedLocations[index].latencyValue = latency;
      
      // Update active status based on new lowest ping
      const lowestPing = Math.min(...updatedLocations
        .filter(loc => loc.latencyValue !== null)
        .map(loc => loc.latencyValue));
      
      updatedLocations.forEach(loc => {
        loc.active = loc.latencyValue === lowestPing;
      });
      
      setLocations(updatedLocations);
    } catch (error) {
      console.error(`Error refreshing ping for ${locations[index].city}:`, error);
      const updatedLocations = [...locations];
      updatedLocations[index].ping = 'N/A';
      updatedLocations[index].latencyValue = null;
      setLocations(updatedLocations);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-[30px] w-full max-w-[95%] md:max-w-[85%] lg:max-w-[85%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[85%] md:max-w-[75%] mx-auto bg-[#030319] rounded-[10px] p-3 shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden border border-white/5">
      {locations.map((location, index) => (
        <button 
          key={index}
          onClick={() => refreshPing(index)}
          className={`
            flex-1 min-w-[140px] flex items-center justify-center whitespace-nowrap 
            ${location.active ? 'bg-[#0088ff]' : 'bg-transparent'} 
            text-white border-none py-1.5 px-2.5 text-[0.8rem] cursor-pointer 
            font-medium font-['Rajdhani'] rounded-[6px] mx-[3px] relative 
            uppercase tracking-[0.5px] h-[30px] hover:bg-white/10 transition-colors duration-300
            ${index < locations.length - 1 ? 'sm:after:content-[\'\'] sm:after:absolute sm:after:right-[-3px] sm:after:top-[25%] sm:after:h-[50%] sm:after:w-[1px] sm:after:bg-white/10' : ''}
          `}
        >
          <img 
            src={`/flags/${location.country}.svg`} 
            alt={`${location.country === 'us' ? 'US' : 'Netherlands'} Flag`} 
            className="w-4 h-3 mr-[3px]" 
          />
          {location.city}  &nbsp; <span className={getPingColor(location.latencyValue)}>{location.ping}</span>
          <span 
            className="text-[0.6rem] ml-[3px] opacity-70 inline-block rotate-90 hover:animate-spin"
            onClick={(e) => {
              e.stopPropagation();
              refreshPing(index);
            }}
          >
            ↻
          </span>
        </button>
      ))}
    </div>
  );
};

export default LocationFlagsPing;