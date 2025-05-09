import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  const [locations, setLocations] = useState([
    { name: 'Miami', country: 'US', lat: 25.7617, lng: -80.1918, endpoint: 'https://ping.mia.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'New York', country: 'US', lat: 40.7128, lng: -74.0060, endpoint: 'https://ping.nyc.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'Texas', country: 'US', lat: 31.9686, lng: -99.9018, endpoint: 'https://ping.dal.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'California', country: 'US', lat: 36.7783, lng: -119.4179, endpoint: 'https://ping.lax.goodleafhosting.com/ping', ping: 'Loading...' },
    { name: 'Amsterdam', country: 'NL', lat: 52.3676, lng: 4.9041, endpoint: 'https://ping.ams.goodleafhosting.com/ping', ping: 'Loading...' }
  ]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3 + (i * 0.1),
        ease: "easeOut"
      }
    })
  };

  const mapVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

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
    <motion.div 
      className="relative text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex items-center justify-center mb-2 max-w-2xl mx-auto mt-12"
        variants={itemVariants}
      >
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-transparent via-[#1D8FEF] to-[#1D8FEF]" />
        <div className="mx-4">
          <motion.img 
            className='w-6' 
            src="/header icons/review-icon.png" 
            alt=""
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-[#1D8FEF] via-[#1D8FEF] to-transparent" />
      </motion.div>

      <motion.div 
        className="flex flex-col items-center mb-12"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center mb-2 max-w-2xl mx-auto"></div>        
        <motion.p 
          className="text-center max-w-3xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our global data centers optimize performance and ensure fast, reliable access,
          reducing latency and improving user experience with seamless service, wherever
          you are.
        </motion.p>
      </motion.div>

      {/* Location Pills */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-10"
        variants={containerVariants}
      >
        {locations.map((location, index) => (
          <motion.div 
            key={location.name} 
            className="flex items-center bg-black/30 rounded-full px-3 py-1 border border-gray-700"
            custom={index}
            variants={pillVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 10px rgba(29, 143, 239, 0.5)",
              transition: { duration: 0.2 } 
            }}
          >
            <img 
              src={`/flags/${location.country.toLowerCase()}.svg`} 
              alt={`${location.country === 'US' ? 'US' : 'Netherlands'} Flag`} 
              className="w-4 h-3 mr-2"
            />
            <span className="font-medium">{location.name}</span>
            <motion.span 
              className={`ml-2 text-xs ${getPingColor(location.latencyValue)}`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {location.ping}
            </motion.span>
            <motion.svg 
              className="w-4 h-4 ml-1 text-blue-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
          </motion.div>
        ))}
      </motion.div>

      {/* World Map SVG */}
      <motion.div 
        className="w-full overflow-hidden relative md:max-w-[95%] lg:max-w-[85%] mx-auto"
        variants={mapVariants}
        whileInView={{ 
          opacity: 1, 
          y: 0 
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img 
          src="/map.png" 
          alt="World Map" 
          className="w-full h-auto"
          initial={{ filter: "blur(5px)", opacity: 0.5 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
    
      </motion.div>
    </motion.div>
  );
};

export default Map;
