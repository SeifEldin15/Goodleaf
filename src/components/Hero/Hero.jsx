import React from 'react'
import Lottie from 'lottie-react'
import { heroAnimation } from '../../utils/animateHero'
import HeroBg from "../../assets/hero-bg.png"
function Hero() {
  return (
    <div className="text-white py-20 px-4 max-w-[85%] mx-auto w-full max-h-[500px]">
      <div className="container mx-auto flex items-center justify-between mt-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold mb-4">
            HOST <span className="text-[#0B7FE3]">SMARTER</span><br />
            SUCCEED, <span className="text-[#0B7FE3]">FASTER!</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Check out the services we offer below such as FiveM Server Hosting. We're
            determined to provide these services at the best quality - customer satisfaction and
            convenience are of the utmost importance for us.
          </p>
          
          {/* Features and CTA */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#0B7FE3]/10 rounded">✓</span>
              <p>5 Day money back guarantee on all hosting products*</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#0B1B2B] text-[#0B7FE3] px-4 py-2 font-medium border border-[#0B7FE3]/20 shadow-[0_0_15px_rgba(11,127,227,0.3)]">
                  TrustScore 4.9
                </span>
              </div>
              <button className="bg-primary-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                Get Started <span>→</span>
              </button>
              <button className="text-gray-400">DEDICATED SERVERS ›</button>
            </div>
          </div>
          <img src={HeroBg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-[-1] mt-[550px]" />
        </div>

        {/* Right Image - Lottie Animation */}
        <div className="flex-1 flex justify-end">
          <Lottie 
            animationData={heroAnimation}
            loop={true}
            className="w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
