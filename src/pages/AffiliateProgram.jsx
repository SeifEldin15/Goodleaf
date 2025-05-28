import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import LazyImage from '../components/LazyImage/LazyImage';

// Helper for randomized ball classes
const affiliateBalls = [
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[34rem] h-[34rem] opacity-90 -left-[38%] md:-left-[13%] lg:-left-[19%] top-[40px]" },
  { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[36rem] h-[36rem] -right-[48%] md:-right-[36%] lg:-right-[41%] top-[120px]" },
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[40rem] h-[40rem] opacity-90 -left-[48%] md:-left-[36%] lg:-left-[41%] top-[650px]" },
];

const AffiliateProgram = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1429] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`absolute z-0 ${affiliateBalls[0].className}`}>
            <img src={affiliateBalls[0].src} alt={affiliateBalls[0].alt} className="w-full h-full opacity-90" />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <img src="/logo.webp" alt="GoodLeaf" className="h-16" />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
              MAKE <span className="text-[#0B7FE3]">MONEY</span>
              <span className="block">WITH</span>
              <span className="block text-[#0B7FE3]">GOODLEAF</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg mb-8">
              You can join our <span className="text-[#0B7FE3] font-medium">Affiliate Program</span> to earn passive income by referring new customers to 
              GoodLeaf or <span className="text-[#0B7FE3] font-medium">apply for a Special Partnership</span> for extra perks like free merch. Get rewarded 
              for your efforts with our lucrative 3-tier system and benefits!
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2D2F42] hover:bg-[#3D3F52] text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Join the Affiliate Program <span>→</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#040BFF] to-[#1E75FF] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity"
              >
                Apply for Special Partner <span>→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-16 px-4 bg-[#0A0E1F]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className={`absolute z-0 ${affiliateBalls[1].className}`}>
              <img src={affiliateBalls[1].src} alt={affiliateBalls[1].alt} className="w-full h-full" />
            </div>
            <Parallax translateY={[-10, 10]}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Welcome Bonus */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#0F1429] p-8 rounded-lg shadow-lg border-[3px] border-transparent hover:border-[#040BFF] hover:scale-105 hover:z-10 transition-all duration-150"
                >
                  <h3 className="text-xl font-bold text-[#0B7FE3] mb-4">$5 Welcome Bonus</h3>
                  <p className="text-gray-300">
                    Get a head start on your affiliate journey with a $5 welcome bonus 
                    when you sign up for our program.
                  </p>
                </motion.div>
                
                {/* Valuable Rewards */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#0F1429] p-8 rounded-lg shadow-lg border-[3px] border-[#040BFF] shadow-[#040BFF]/30 scale-105 z-10"
                >
                  <h3 className="text-xl font-bold text-[#0B7FE3] mb-4">Valuable Rewards</h3>
                  <p className="text-gray-300">
                    Earn valuable server credits and cash bonuses for your referrals, providing 
                    you with passive income opportunities.
                  </p>
                </motion.div>
                
                {/* Discord Roles */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-[#0F1429] p-8 rounded-lg shadow-lg border-[3px] border-transparent hover:border-[#040BFF] hover:scale-105 hover:z-10 transition-all duration-150"
                >
                  <h3 className="text-xl font-bold text-[#0B7FE3] mb-4">Exclusive Discord Roles</h3>
                  <p className="text-gray-300">
                    As you progress through the tiers, you'll unlock new Discord roles within our 
                    community.
                  </p>
                </motion.div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
      
      {/* Tiers Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className={`absolute z-0 ${affiliateBalls[2].className}`}>
              <img src={affiliateBalls[2].src} alt={affiliateBalls[2].alt} className="w-full h-full opacity-90" />
            </div>
            
            <Parallax translateY={[-5, 5]}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B7FE3] relative z-10"
              >
                Affiliate Program Tiers
              </motion.h2>
            </Parallax>
            
            <Parallax translateY={[10, -10]}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Tier 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#35344D] p-8 rounded-xl shadow-lg relative overflow-hidden group"
                >
                  <div className="relative z-30">
                    <h3 className="text-xl font-extrabold mb-6 text-white">Tier 1 (10 referrals)</h3>
                    <ul className="space-y-4 text-white">
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>4GB free server credit (1 month)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Priority RocketFast support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Custom Discord role</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                {/* Tier 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#008FFE] p-8 rounded-xl shadow-lg relative overflow-hidden group"
                >
                  <div className="relative z-30">
                    <h3 className="text-xl font-extrabold mb-6 text-white">Tier 2 (25 referrals)</h3>
                    <ul className="space-y-4 text-white">
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>$10 cash bonus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>3-month server credit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>5% Commission Increase</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                {/* Tier 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-[#6357E2] p-8 rounded-xl shadow-lg relative overflow-hidden group"
                >
                  <div className="relative z-30">
                    <h3 className="text-xl font-extrabold mb-6 text-white">Tier 3 (50 referrals)</h3>
                    <ul className="space-y-4 text-white">
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>$50 cash bonus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>6-month server credit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>10% Commission Increase</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
      
      {/* Special Partnership */}
      <div className="py-16 px-4 bg-[#0A0E1F]">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <Parallax translateY={[-8, 8]}>
              <div className="bg-gradient-to-r from-[#040BFF] to-[#1E75FF] p-10 rounded-lg relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/5">
                    <span className="inline-block px-4 py-1 bg-black text-white text-sm rounded-full mb-4">For creators</span>
                    <h3 className="text-4xl font-bold text-white mb-2">Looking for more?</h3>
                  </div>
                  <div className="md:w-3/5">
                    <p className="text-white text-xl">
                      You can also become a GoodLeaf partner for many more benefits including 
                      <span className="font-semibold"> special affiliate monetization, free merch, free services</span> and more!
                    </p>
                  </div>
                </div>
              </div>
            </Parallax>
            
            <div className="text-center mt-8 text-gray-400 text-sm relative z-10">
              <p>Rewards are not given out automatically</p>
              <p>Rewards are claimable via Discord ticket.</p>
            </div>
            
            <div className="relative mt-8">
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 relative z-10">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2D2F42] hover:bg-[#3D3F52] text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Join the Affiliate Program <span>→</span>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#040BFF] to-[#1E75FF] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity"
                >
                  Apply for Special Partner <span>→</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AffiliateProgram;
