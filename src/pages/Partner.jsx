import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroPartner from '../components/HeroPartner/HeroPartner'
import PartnerServices from '../components/PartnerServices/PartnerServices'
import Pricing2 from '../components/Pricing/Pricing2'
import Footer from '../components/Footer/Footer'

const Partner = () => {
  return (
    <div>
      <Navbar />
      <HeroPartner />
      <div className="flex items-center justify-center gap-4  mb-20 mt-20">
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
          <p className="text-[#1D90F9] text-sm ">Prime data Center</p>
        </div>
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
      </div> 

      <PartnerServices />
      <div className="flex items-center justify-center gap-4 mb-20 mt-20">
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
          <p className="text-[#1D90F9] text-sm ">FEATURED THIS MONTH</p>
        </div>
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
      </div> 
<Pricing2 />

<div className="flex items-center justify-center gap-4 mb-10 mt-20">
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
          <p className="text-[#1D90F9] text-sm ">MIGRATE YOUR HARDWARE</p>
        </div>
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
      </div> 
      {/* Hardware Migration Section */}
      <div className="py-16 px-10 flex justify-between items-center max-w-[85%] mx-auto">
        <div className="max-w-lg">
          <h2 className="text-white text-4xl font-bold mb-3">
            We can also migrate your <br />
            <span className="uppercase">Hardware!</span>
          </h2>
          <p className="text-gray-300 mb-8">
            You heard that right. We will move or help you move your hardware from your old datacenter to 
            our locations. To find out more information or to get started reach out to our sales team to 
            schedule your hardware move.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#1D90F9] text-lg cursor-pointer">Move my Hardware</span>
            <div className="w-8 h-8 rounded-full bg-[#1D90F9] flex items-center justify-center cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/migrate.png" alt="Hardware Migration" className="max-w-xl" />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Partner
