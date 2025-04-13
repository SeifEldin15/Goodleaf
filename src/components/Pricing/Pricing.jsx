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

const gameImages = {
  "Minecraft": "/game-minecraft.png",
  "Rust": "/game-rust.png",
  "ARK": "/game-ark.png",
  "Valheim": "/game-valheim.png",
  "CS2": "/game-cs2.png",
  "Terraria": "/game-terraria.png",
  "GTA": "/game-gta.png",
  "DayZ": "/game-dayz.png"
};

const PricingCard = ({ title, price, features, location, labels, isSelected, index }) => (
  <Parallax
    translateY={[20, -20]}
    scale={[0.95, 1.05]}
    opacity={[0.8, 1]}
    easing="easeInQuad"
    startScroll={100 * index} // Staggered effect based on index
  >
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className={`p-4 bg-[#111827] rounded-md transition-all duration-150 relative overflow-hidden group 
      border-[3px] ${isSelected 
        ? 'border-[#040BFF] shadow-lg shadow-[#040BFF]/30 scale-105' 
        : 'border-transparent hover:border-[#040BFF] hover:scale-105 hover:z-10'}`}
    >
      {/* Game Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/pricing.png" 
          alt={`${title} background`} 
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141526]/90 to-[#141526] z-10" />
      </div>

      <div className={`absolute inset-0 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-150 z-20`}>
        <div className="absolute inset-0 rounded-md border-[3px] bg-gradient-to-b  blur-[10px]"></div>
      </div>

      <div className="relative z-30" >

        {/* Game server header */}
        <div className="justify-center items-center" >
          <div className="absolute right-6 bg-[#007BFF] text-white text-xs font-medium px-3 py-0.5">
            FEATURED
          </div>
          <img src={gameServerIcon} alt="Game Server Icon" className="mb-5 w-6 h-6 text-[#007BFF] mr-2" />
          <div className="">
            <span className="text-[#007BFF] text-[16px] font-['Rajdhani'] font-medium">GAME SERVER</span>
          </div>
          <h2 className="text-[28px] font-['Rajdhani'] text-white mt-3">{title}</h2>
        </div>

        {/* Price section */}
        <div className="mb-4 m-2">
          <span className="text-3xl font-bold">
            <span className="text-[#007BFF]">$</span>
            <span className="bg-gradient-to-r from-[#007BFF] to-[#9D4EDD] text-transparent bg-clip-text">{price}</span>
          </span>
          <span className="text-gray-500">/mo</span>
        </div>

        {/* Feature labels */}
        <div className="flex gap-1.5 mb-4">
          {labels.map((label, index) => (
            <div key={index} className="border border-[#2A3441] px-2 py-0.5 rounded-xl text-[#8A93A2] text-xs font-medium">
              {label}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="font-['Rajdhani'] text-[14px] text-gray-400 mb-4">
          Order your game server today and start playing instantly with easy setup and powerful performance.
        </p>

        {/* Features list */}
        <div className="space-y-2">
          {features.map((feature, index) => {
            let iconSrc;
            let iconColor;
            
            if (index === 0) {
              // CPU icon
              iconSrc = cpuIcon;
              iconColor = "text-[#9D4EDD]";
            } else if (index === 1) {
              // DDoS Protection icon
              iconSrc = ddosIcon;
              iconColor = "text-[#FF5757]";
            } else if (index === 2) {
              // CPU Usage icon
              iconSrc = cpuUsageIcon;
              iconColor = "text-[#007BFF]";
            } else if (index === 3) {
              // Storage icon
              iconSrc = storageIcon;
              iconColor = "text-[#007BFF]";
            } else if (index === 4) {
              // Dashboard icon
              iconSrc = dashboardIcon;
              iconColor = "text-[#007BFF]";
            } else if (index === 5) {
              // Mod Install icon
              iconSrc = modIcon;
              iconColor = "text-[#007BFF]";
            }
            
            return (
              <div key={index} className="flex items-center text-gray-300 text-xs">
                <div className={`relative mr-2`}>
                  <div className={`absolute inset-0 ${iconColor} opacity-20 blur-md rounded-full`}></div>
                  <img src={iconSrc} alt={`Feature ${index + 1}`} className={`relative w-6 h-6 ${iconColor}`} />
                </div>
                {feature}
              </div>
            );
          })}
        </div>

        {/* Locations */}
        {location && (
          <div className="mb-4 h-[60px] pt-3">
            <h4 className="text-xs text-[#007BFF] mb-1">Locations:</h4>
            <div className="flex items-center text-gray-300 text-xs pt-1">
              <span className="mr-1.5">🇺🇸</span>
              {location}
            </div>
          </div>
        )}

        {/* Deploy button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-[36px] bg-gradient-to-r from-[#040BFF] to-[#1E75FF] hover:opacity-90 text-white font-medium py-2 px-3 rounded-full transition-opacity flex items-center justify-center text-sm"
        >
          DEPLOY NOW
          <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  </Parallax>
);

const Pricing = () => {
  const plans = [
    {
      title: "Rust",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"  
    },{
      title: "Minecraft",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },{
      title: "ARK",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas",
    },{
      title: "Valheim",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },{
      title: "CS2",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },{
      title: "Terraria",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },{
      title: "GTA",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },{
      title: "DayZ",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },];

  return (
    <section className="py-10 px-4">
      <div>
        <Parallax translateY={[-30, 30]} opacity={[0.5, 1]}>
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div className="flex flex-col items-center pt-10">
              <motion.p 
                variants={itemVariants}
                className="font-['Rajdhani'] text-[#0060FE] text-base font-semibold uppercase tracking-wide"
              >
                What about our plans
              </motion.p>
              
              <motion.h2 
                variants={itemVariants}
                className="font-['Rajdhani'] text-[48px] leading-[50.4px] font-bold text-white text-center max-w-[730px]"
              >
                Choose Your Ideal Hosting Solution  
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-2 font-['Rajdhani'] text-[48px] font-bold"
              >
                <span className="text-white">Browse</span>
                <span className="text-[#007BFF]">Our Plans</span>
              </motion.div>
            </div>
          </motion.div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              isSelected={false} // No cards are highlighted by default
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;