import React from 'react';
import './icons.css';
import cpuIcon from './svg/cpu-icons.svg';
import ddosIcon from './svg/ddos-icons.svg';
import cpuUsageIcon from './svg/cpu-usage-icons.svg';
import storageIcon from './svg/storage-icons.svg';
import dashboardIcon from './svg/dashboard-icons.svg';
import modIcon from './svg/mod-icons.svg';
import gameServerIcon from './svg/game-server-icon.svg';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Define background images for each game
const gameBackgrounds = {
  "Minecraft": "/pricing.webp",
  "Rust": "/pricing.webp",
  "ARK": "/pricing.webp",
  "Valheim": "/pricing.webp",
  "CS2": "/pricing.webp",
  "Terraria": "/pricing.webp",
  "GTA": "/pricing.webp",
  "DayZ": "/pricing.webp"
};

const PricingCard = ({ title, price, features = [], location, labels = [], isSelected, index }) => (
  <Parallax
    translateY={[20, -20]}
    scale={[0.95, 1.05]}
    opacity={[0.8, 1]}
    easing="easeInQuad"
    startScroll={100 * index}
  >
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className={`px-6 pt-4 pb-6 bg-[#111827] rounded-xl transition-all duration-150 relative overflow-hidden group 
      border-[3px] ${isSelected 
        ? 'border-[#040BFF] shadow-lg shadow-[#040BFF]/30 scale-105' 
        : 'border-transparent hover:border-[#040BFF] hover:scale-105 hover:z-10'}`}
    >
      {/* Game Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={gameBackgrounds[title] || "/pricing.webp"} 
          alt={`${title} background`} 
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: "center 20%" }}
        />
      </div>

      {/* Place the gradient div here, between image background and text content */}
      {/* Gradient: Solid #141526 bottom 65%, transparent top 35% */}
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#141526] via-[#141526] via-65% to-transparent z-10" />

      <div className={`absolute inset-0 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-150 z-20`}>
        <div className="absolute inset-0 rounded-md border-[3px] bg-gradient-to-b blur-[10px]"></div>
      </div>

      <div className="relative z-30">
        {/* Game server header */}
        <div className="justify-center items-center">
          <div className="absolute right-6 bg-[#007BFF] text-white text-xs font-medium px-3 py-0.5">
            FEATURED
          </div>
          <img src={gameServerIcon} alt="Game Server Icon" className="mb-2 w-6 h-6 text-[#007BFF] mr-2" />
          <div className="">
            <span className="text-[#007BFF] text-[18px] font-['Rajdhani'] font-medium">GAME SERVER</span>
          </div>
          <h2 className="text-[32px] font-['Rajdhani'] text-white mt-1">{title}</h2>
        </div>

        {/* Price section */}
        <div className="mb-3 m-2 mt-1">
          <span className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#1D90F0] to-[#B76DF0] text-transparent bg-clip-text">${price}</span>
          </span>
          <span className="text-gray-500 text-base">/mo</span>
        </div>

        {/* Feature labels */}
        <div className="flex gap-2 mb-3">
          {labels.map((label, index) => (
            <div key={index} className="border border-[#2A3441] px-2.5 py-1 rounded-xl text-[#8A93A2] text-sm font-medium">
              {label}
            </div>
          ))}
        </div>

        {/* Description - reduced height by making it shorter */}
        <p className="font-['Rajdhani'] text-base text-gray-400 mb-3">
          Order your game server today with easy setup and powerful performance.
        </p>

        {/* Features list - condensed spacing */}
        <div className="space-y-2 mb-3">
          {features.map((feature, index) => {
            let iconSrc;
            let iconColor;

            // Prioritize DDoS Protection icon
            if (feature === "DDoS Protection") {
              iconSrc = ddosIcon;
              iconColor = "text-[#FF5757]";
            } 
            // Keep existing index-based logic for other icons
            else if (index === 0) {
              iconSrc = cpuIcon;
              iconColor = "text-[#9D4EDD]";
            } else if (index === 1) { // This might need adjustment if DDoS isn't always index 1
              // Fallback if DDoS check didn't match, but index is 1
              // Decide what icon to show here - maybe a default or skip?
              // For now, let's assume DDoS protection *was* intended for index 1 in the old data
              // And we'll use the CPU Usage icon as a placeholder if index 1 is NOT DDoS
              iconSrc = cpuUsageIcon; 
              iconColor = "text-[#007BFF]"; 
            } else if (index === 2) {
              iconSrc = cpuUsageIcon;
              iconColor = "text-[#007BFF]";
            } else if (index === 3) {
              iconSrc = storageIcon;
              iconColor = "text-[#007BFF]";
            } else if (index === 4) {
              iconSrc = dashboardIcon;
              iconColor = "text-[#007BFF]";
            } else if (index === 5) {
              iconSrc = modIcon;
              iconColor = "text-[#007BFF]";
            }
            
            // Default fallback if no condition met (optional)
            if (!iconSrc) {
              iconSrc = gameServerIcon; // Example fallback
              iconColor = "text-gray-400"; // Example fallback color
            }

            return (
              <div key={index} className="flex items-center text-gray-300 text-base">
                <div className={`relative mr-3.5`}>
                  <div className={`absolute inset-0 ${iconColor} opacity-20 blur-md rounded-full`}></div>
                  <img src={iconSrc} alt={`Feature ${index + 1}`} className={`relative w-7 h-7 ${iconColor}`} />
                </div>
                {feature}
              </div>
            );
          })}
        </div>

        {/* Locations - reduced height */}
        {location && (
          <div className="mb-3 h-[45px] pt-1.5">
            <h4 className="text-sm text-[#007BFF] mb-1">Locations:</h4>
            <div className="flex items-center text-gray-300 text-sm">
              <span className="mr-1.5">🇺🇸</span>
              {location}
            </div>
          </div>
        )}

        {/* Deploy button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-[38px] bg-gradient-to-r from-[#040BFF] to-[#1E75FF] hover:opacity-90 text-white font-medium py-2 px-4 rounded-full transition-opacity flex items-center justify-center text-base"
        >
          DEPLOY NOW
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  </Parallax>
);

const Pricing = ({ plans = [] }) => {
  return (
    <section className="py-12 px-5">
      <div>
        <Parallax translateY={[-30, 30]} opacity={[0.5, 1]}>
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div className="flex flex-col items-center pt-8">
              <motion.p 
                variants={itemVariants}
                className="font-['Rajdhani'] text-[#0060FE] text-base font-semibold uppercase tracking-wide"
              >
                What about our plans
              </motion.p>
              
              <motion.h2 
                variants={itemVariants}
                className="font-['Rajdhani'] text-[36px] sm:text-[48px] leading-[40px] sm:leading-[50px] font-bold text-white text-center max-w-[760px] mt-1"
              >
                Choose Your Ideal Hosting Solution  
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-2 font-['Rajdhani'] text-[36px] sm:text-[48px] font-bold mt-1"
              >
                <span className="text-white">Browse</span>
                <span className="text-[#007BFF]">Our Plans</span>
              </motion.div>
            </div>
          </motion.div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              isSelected={false}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;