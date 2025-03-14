import React from 'react';
import LocationFlagsPing from '../LocationFlagsPing/LocationFlagsPing'; 

const SilverHero = () => {
  return (
    <div className="relative flex items-center justify-center text-center text-white min-h-[600px] md:min-h-[800px] lg:min-h-[900px] bg-[#1a1a2e] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/heros-assets/hero_bg.jpg')"}}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="z-10 w-full max-w-[1200px] px-4 md:px-6">
        <h1 
          className="font-['Rajdhani'] font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-[1] sm:leading-[70px] text-center uppercase mx-auto relative w-full md:w-[594px] shadow-[0px_0px_6px_rgba(192,192,192,0.1)]" 
          style={{color: '#C0C0C0'}}
        >
          BUDGET VPS
        </h1>
        <h2 className="font-['Rajdhani'] font-bold text-[35px] sm:text-[50px] md:text-[70px] leading-tight md:leading-[97px] text-center uppercase text-white w-full md:w-[318px] mx-auto mt-2 md:mt-0">
          SERVERS
        </h2>
        <p className="font-['Rajdhani'] font-bold text-xl sm:text-2xl md:text-[32px] leading-normal md:leading-[50.4px] text-center text-white max-w-[1719px] mx-auto mt-6 md:mt-[60px]">
          Get the best performance and security for your business with our dedicated servers.
          <br className="hidden sm:block" /> 
          Customized plans are available upon contacting our team.
        </p>
        <LocationFlagsPing />
      </div>
    </div>
  );
};

export default SilverHero;
