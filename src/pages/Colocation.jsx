import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ColocationHero from '../components/HeroPartner/ColocationHero'
import PartnerServices from '../components/PartnerServices/PartnerServices'
import Pricing2 from '../components/Pricing/Pricing2'
import Footer from '../components/Footer/Footer'
import LazyImage from '../components/LazyImage/LazyImage'

// Helper for randomized ball classes
const coloBalls = [
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[32rem] h-[32rem] opacity-90 -left-[30%] md:-left-[10%] lg:-left-[16%] top-[30px]" },
  { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[36rem] h-[36rem] -right-[38%] md:-right-[40%] lg:-right-[45%] top-[100px]" },
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[38rem] h-[38rem] opacity-90 -left-[28%] md:-left-[12%] lg:-left-[18%] top-[400px]" },
  { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[32rem] h-[32rem] -right-[28%] md:-right-[18%] lg:-right-[23%] top-[700px]" },
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[30rem] h-[30rem] opacity-90 -left-[20%] md:-left-[8%] lg:-left-[12%] top-[1000px]" },
  { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[40rem] h-[40rem] -right-[35%] md:-right-[25%] lg:-right-[30%] top-[1300px]" },
];

const Partner = () => {
  return (
    <div>
      <Navbar />
      <ColocationHero />
      <div className="relative">
        {/* Circles for the colocation page */}
        <div className={`absolute z-0 ${coloBalls[0].className}`}>
          <img src={coloBalls[0].src} alt={coloBalls[0].alt} className="w-full h-full opacity-90" />
        </div>
        <div className={`absolute z-0 ${coloBalls[1].className}`}>
          <img src={coloBalls[1].src} alt={coloBalls[1].alt} className="w-full h-full" />
        </div>
        <div className={`absolute z-0 ${coloBalls[2].className}`}>
          <img src={coloBalls[2].src} alt={coloBalls[2].alt} className="w-full h-full opacity-90" />
        </div>
        <div className={`absolute z-0 ${coloBalls[3].className}`}>
          <img src={coloBalls[3].src} alt={coloBalls[3].alt} className="w-full h-full" />
        </div>
        <div className={`absolute z-0 ${coloBalls[4].className}`}>
          <img src={coloBalls[4].src} alt={coloBalls[4].alt} className="w-full h-full opacity-90" />
        </div>
        <div className={`absolute z-0 ${coloBalls[5].className}`}>
          <img src={coloBalls[5].src} alt={coloBalls[5].alt} className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center gap-4  mb-20 mt-20">
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
          <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
            <p className="text-[#1D90F9] text-sm ">Prime data Center</p>
          </div>
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        </div> 
        <div className="max-w-[85%] mx-auto">
          <PartnerServices />
        </div>
        <div className="flex items-center justify-center gap-4 mb-20 mt-20">
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
          <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
            <p className="text-[#1D90F9] text-sm ">FEATURED THIS MONTH</p>
          </div>
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        </div> 
        <div className="max-w-[85%] mx-auto">
          <Pricing2 />
        </div>
        <div className="flex items-center justify-center gap-4 mb-10 mt-20">
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
          <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
            <p className="text-[#1D90F9] text-sm ">MIGRATE YOUR HARDWARE</p>
          </div>
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        </div> 
        {/* Hardware Migration Section */}
        <div className="py-8 md:py-16 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 max-w-[95%] md:max-w-[90%] mx-auto">
          <div className="w-full md:w-5/12">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 text-center md:text-left">
              We can also migrate your <br className="hidden md:block" />
              <span className="uppercase">Hardware!</span>
            </h2>
            <p className="text-gray-300 mb-8 text-center md:text-left">
              You heard that right. We will move or help you move your hardware from your old datacenter to 
              our locations. To find out more information or to get started reach out to our sales team to 
              schedule your hardware move.
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[#1D90F9] text-lg cursor-pointer">Move my Hardware</span>
              <div className="w-8 h-8 rounded-full bg-[#1D90F9] flex items-center justify-center cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-6/12 flex justify-center md:justify-end">
            <img src="/migrate.webp" alt="Hardware Migration" className="w-full max-w-[350px] md:max-w-[600px] object-contain" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Partner
