import React from 'react';
import LocationFlagsPing from '../LocationFlagsPing/LocationFlagsPing'; 

const SilverHero = () => {
  return (
    <div className="relative flex items-center justify-center text-center text-white h-screen bg-[#1a1a2e] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/heros-assets/hero_bg.jpg')"}}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="z-10 w-full max-w-[1200px] px-2.5">
        <h1 className="font-['Rajdhani'] font-bold text-[80px] leading-[70px] text-center uppercase mx-auto relative w-[594px] shadow-[0px_0px_6px_rgba(192,192,192,0.1)]" style={{color: '#C0C0C0'}}>BUDGET VPS</h1>
        <h2 className="font-['Rajdhani'] font-bold text-[70px] leading-[97px] text-center uppercase text-white w-[318px] h-[87px] mx-auto">SERVERS</h2>
        <p className="font-['Rajdhani'] font-bold text-[32px] leading-[50.4px] text-center text-white max-w-[1719px] mx-auto mt-[60px]">
          Get the best performance and security for your business with our dedicated servers.
          <br /> 
          Customized plans are available upon contacting our team.
        </p>
        <LocationFlagsPing />
      </div>
    </div>
  );
};

export default SilverHero;
