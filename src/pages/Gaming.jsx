import React from 'react'
import GamingHero from '../components/SecondaryHero/GamingHero'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import PricingSlider from '../components/PricingSlider/PricingSlider'
import FAQ from '../components/FAQ/FAQ'
function Gaming() {
  return (
    <div>
      <Navbar />
      <GamingHero />
      <ReviewSlider />
      <div className='max-w-[95%] md:max-w-[85%] lg:max-w-[85%] mx-auto'>
      <div className="flex items-center justify-center mb-2 max-w-2xl mx-auto mt-24 ">
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-transparent via-[#1D8FEF] to-[#1D8FEF]" />
        <div className="mx-4">
          <span className='w-6 h-6 flex items-center justify-center text-[#1D8FEF] text-sm font-bold rounded-full border-2 border-[#1D8FEF] leading-none pb-[1px]'>$</span>
        </div>
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-[#1D8FEF] via-[#1D8FEF] to-transparent" />
      </div>
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">CHECK OUR PLANS</h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Affordable Hosting <span className="text-[#1D8FEF] ">Prices.</span>
        </h2>
      </div>
      <PricingSlider />
      <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Gaming
