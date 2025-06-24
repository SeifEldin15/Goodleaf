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

        {/* What Makes Our Hosting Solution the Best Section */}
        <div className="relative mt-20 overflow-hidden">
          {/* Top Wave with Reference Pattern */}
          <div className="w-full">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-20">
              <path d="M0,50 C240,20 360,80 600,40 C840,0 1080,60 1440,30 L1440,100 L0,100 Z" fill="#1D90F9" fillOpacity="1"/>
            </svg>
          </div>
          
          {/* Blue gradient background */}
          <div className="bg-gradient-to-r from-[#1D90F9] to-[#007BFF] py-16 -mt-1">
            <div className="relative z-10 max-w-6xl mx-auto px-4">
              {/* Title */}
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                What Makes Our Hosting<br />solution the Best?
              </h2>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Safe & Secure */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">Safe & Secure</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    We own all our own hardware and network racks, and never allow your data to leave our systems with industry leading redundancy.
                  </p>
                </div>

                {/* 99.9% Network Uptime */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 9V7L7.5 3.5C8.25 3.19 9.1 3 10 3C13.31 3 16 5.69 16 9V11H13L15 13L17 11H14V9C14 6.79 12.21 5 10 5C9.43 5 8.9 5.13 8.42 5.35L11 8V9ZM7 11V9C7 8.62 7.06 8.27 7.14 7.93L5.61 6.4C5.23 7.17 5 8.06 5 9V11H2L4 13L6 11H7ZM13 15V17L16.5 20.5C15.75 20.81 14.9 21 14 21C10.69 21 8 18.31 8 15V13H11L9 11L7 13H10V15C10 17.21 11.79 19 14 19C14.57 19 15.1 18.87 15.58 18.65L13 16V15ZM17 13V15C17 15.38 16.94 15.73 16.86 16.07L18.39 17.6C18.77 16.83 19 15.94 19 15V13H22L20 11L18 13H17Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">99.9% Network Uptime</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    We are confident in the Quality of our Network Infrastructure, so we offer a 99.9% Network Uptime Guarantee with all our services.
                  </p>
                </div>

                {/* 24/7 Technical Support */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1C18.08 1 23 5.92 23 12S18.08 23 12 23C10.11 23 8.32 22.47 6.81 21.5L2 23L3.5 18.19C2.53 16.68 2 14.89 2 13C2 6.92 6.92 2 13 2H12C12 1 12 1 12 1ZM8.5 11A1.5 1.5 0 0 0 10 12.5A1.5 1.5 0 0 0 8.5 14A1.5 1.5 0 0 0 7 12.5A1.5 1.5 0 0 0 8.5 11ZM15.5 11A1.5 1.5 0 0 0 17 12.5A1.5 1.5 0 0 0 15.5 14A1.5 1.5 0 0 0 14 12.5A1.5 1.5 0 0 0 15.5 11Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">24/7 Technical Support</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Support is just a quick ticket away. We strive to have a solution for you in under 10 minutes. Your time is valuable.
                  </p>
                </div>

                {/* Money Back Guarantee */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.67 10.67C10.45 10.45 10.12 10.38 9.84 10.5L2.5 13.5C2.18 13.63 2 13.94 2 14.28V21.5C2 21.78 2.22 22 2.5 22H9.5C9.78 22 10 21.78 10 21.5V19.5H19.5C19.78 19.5 20 19.28 20 19V9H21ZM14.5 17.5H8.5V15.5H14.5V17.5Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">Money Back Guarantee</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    If we cant resolve your issue we will be happy to offer a full refund. Learn more about our guarantee and what is covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
