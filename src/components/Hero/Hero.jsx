import React from 'react'
import Lottie from 'lottie-react'
import { heroAnimation } from '../../utils/animateHero'
import HeroBg from "../../assets/hero-bg.webp"
import FeatureCards from '../FeatureCards/FeatureCards'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

function Hero() {
  // Text animation variants
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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div>
      <div className="text-white py-10 md:py-20 px-4 max-w-[95%] md:max-w-[85%] lg:max-w-[85%] mx-auto w-full relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-6 md:mt-12 gap-8">
          {/* Left Content with animation */}
          <Parallax translateY={[-20, 20]} className="max-w-xl w-full">
            <motion.div 
              className="w-full"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <motion.h1 variants={itemVariants} className="text-3xl md:text-6xl font-extrabold mb-4 text-center md:text-left mt-10 md:mt-0 lg:mt-0">
                HOST <span className="text-[#0B7FE3]">SMARTER</span><br />
                SUCCEED, <span className="text-[#0B7FE3]">FASTER!</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-300 mb-8 text-center md:text-left">
                Check out the services we offer below such as FiveM Server Hosting. We're
                determined to provide these services at the best quality - customer satisfaction and
                convenience are of the utmost importance for us.
              </motion.p>
              
              {/* Features and CTA */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center gap-4 bg-[#0B1B2B] rounded-full py-2 px-3 max-w-[500px]">
                  <div className="bg-[#0B7FE3]/10 rounded-full p-2">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0B7FE3]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                    </svg>
                  </div>
                  <p className="text-white text-sm md:text-base">5 Day money back guarantee on all hosting products*</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#0B1B2B] text-[#0B7FE3] px-3 md:px-4 py-2 font-medium border border-[#0B7FE3]/20 shadow-[0_0_15px_rgba(11,127,227,0.3)] text-sm md:text-base">
                      TrustScore 4.9
                    </span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-gradient text-white px-4 md:px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm md:text-base"
                  >
                    Get Started <span>→</span>
                  </motion.button>
                  <button className="text-gray-400 text-sm md:text-base">DEDICATED SERVERS ›</button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Parallax>

          {/* Right Image - Lottie Animation with parallax */}
          <Parallax translateY={[10, -10]} className="flex-1 flex justify-center md:justify-end w-full max-w-[300px] md:max-w-xl mx-auto md:mx-0">
            <Lottie 
              animationData={heroAnimation}
              loop={true}
              className="w-full"
            />
          </Parallax>
        </div>
        <div className="mt-12 md:mt-[150px]">
          <Parallax speed={-5}>
            <FeatureCards />
          </Parallax>
        </div>
      </div>
      <img src={HeroBg} alt="Hero Background" className="absolute left-0 right-0 w-full object-cover z-[-1] md:mt-[-500px] lg:mt-[-450px] hidden md:block" />
    </div>
  )
}

export default Hero
