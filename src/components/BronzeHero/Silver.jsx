import React from 'react';

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
        
        <div className="flex justify-center gap-0 mt-[30px] w-full max-w-[75%] mx-auto bg-[#030319] rounded-[10px] p-3 shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden border border-white/5">
          <button className="flex-1 flex items-center justify-center whitespace-nowrap bg-[#0088ff] text-white border-none py-1.5 px-2.5 text-[0.8rem] cursor-pointer font-medium font-['Rajdhani'] rounded-[6px] mx-[3px] relative uppercase tracking-[0.5px] h-[30px] hover:bg-white/10 transition-colors duration-300">
            <span className="text-[0.8rem] mr-[3px]">🇺🇸</span> United States 91ms <span className="text-[0.6rem] ml-[3px] opacity-70 inline-block rotate-90 hover:animate-spin">↻</span>
          </button>
          <button className="flex-1 flex items-center justify-center whitespace-nowrap bg-transparent text-white border-none py-1.5 px-2.5 text-[0.8rem] cursor-pointer font-medium font-['Rajdhani'] rounded-[6px] mx-[3px] relative uppercase tracking-[0.5px] h-[30px] hover:bg-white/10 transition-colors duration-300 after:content-[''] after:absolute after:right-[-3px] after:top-[25%] after:h-[50%] after:w-[1px] after:bg-white/10">
            <span className="text-[0.8rem] mr-[3px]">🇸🇬</span> Singapore 91ms <span className="text-[0.6rem] ml-[3px] opacity-70 inline-block rotate-90 hover:animate-spin">↻</span>
          </button>
          <button className="flex-1 flex items-center justify-center whitespace-nowrap bg-transparent text-white border-none py-1.5 px-2.5 text-[0.8rem] cursor-pointer font-medium font-['Rajdhani'] rounded-[6px] mx-[3px] relative uppercase tracking-[0.5px] h-[30px] hover:bg-white/10 transition-colors duration-300 after:content-[''] after:absolute after:right-[-3px] after:top-[25%] after:h-[50%] after:w-[1px] after:bg-white/10">
            <span className="text-[0.8rem] mr-[3px]">🇸🇬</span> Singapore 91ms <span className="text-[0.6rem] ml-[3px] opacity-70 inline-block rotate-90 hover:animate-spin">↻</span>
          </button>
          <button className="flex-1 flex items-center justify-center whitespace-nowrap bg-transparent text-white border-none py-1.5 px-2.5 text-[0.8rem] cursor-pointer font-medium font-['Rajdhani'] rounded-[6px] mx-[3px] relative uppercase tracking-[0.5px] h-[30px] hover:bg-white/10 transition-colors duration-300 after:content-[''] after:absolute after:right-[-3px] after:top-[25%] after:h-[50%] after:w-[1px] after:bg-white/10">
            <span className="text-[0.8rem] mr-[3px]">🇸🇬</span> Singapore 91ms <span className="text-[0.6rem] ml-[3px] opacity-70 inline-block rotate-90 hover:animate-spin">↻</span>
          </button>
          <button className="flex-1 flex items-center justify-center whitespace-nowrap bg-transparent text-white border-none py-1.5 px-2.5 text-[0.8rem] cursor-pointer font-medium font-['Rajdhani'] rounded-[6px] mx-[3px] relative uppercase tracking-[0.5px] h-[30px] hover:bg-white/10 transition-colors duration-300">
            <span className="text-[0.8rem] mr-[3px]">🇸🇬</span> Singapore 91ms <span className="text-[0.6rem] ml-[3px] opacity-70 inline-block rotate-90 hover:animate-spin">↻</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SilverHero;
