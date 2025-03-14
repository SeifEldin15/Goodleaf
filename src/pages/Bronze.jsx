import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BronzeHero from '../components/SecondaryHero/BronzeHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'

function Bronze() {
  return (
    <div>
      <Navbar />
      <BronzeHero />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
      <div className="flex items-center justify-center gap-4 mb-4 mt-20">
            <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
            <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
              <p className="text-[#1D90F9] text-sm ">FEATURED THIS MONTH</p>
            </div>
            <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
          </div> 
        <Pricing />
        <ServerCompare />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Bronze
