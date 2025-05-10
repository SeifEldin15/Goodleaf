import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ColocationHero from '../components/SecondaryHero/ColocationHero'
import Footer from '../components/Footer/Footer'
import PricingSlider from '../components/PricingSlider/PricingSlider'
import ServerCompare from '../components/ServerCompare/ServerCompare'
import FAQ from '../components/FAQ/FAQ'
import LazyImage from '../components/LazyImage/LazyImage'

const faqCategories = [
  {
    title: 'Colocation Basics',
    description: 'Learn about our colocation services.'
  },
  {
    title: 'Technical Details',
    description: 'Infrastructure and connectivity information.'
  },
  {
    title: 'Support & Migration',
    description: 'How we help you move and maintain your hardware.'
  }
];

const faqData = {
  'Colocation Basics': [
    {
      question: 'What is colocation hosting?',
      answer: 'Colocation hosting is a service where you own the server hardware, but it\'s housed in our data center. We provide the power, cooling, physical security, and internet connectivity while you maintain control of your own equipment.'
    },
    {
      question: 'Who should consider colocation?',
      answer: 'Colocation is ideal for businesses that want to maintain ownership of their hardware while eliminating the costs of building and maintaining their own data center. It\'s perfect for organizations with specific hardware requirements or compliance needs.'
    }
  ],
  'Technical Details': [
    {
      question: 'What network connectivity options are available?',
      answer: 'We offer redundant tier-1 bandwidth providers, multiple 10Gbps uplinks, and options for dedicated bandwidth. Our network is designed for reliability with automatic failover and 99.99% uptime guarantees.'
    },
    {
      question: 'What security measures are in place?',
      answer: 'Our data centers feature 24/7 security personnel, biometric access controls, CCTV surveillance, fire suppression systems, and multiple layers of physical access restrictions to protect your equipment.'
    }
  ],
  'Support & Migration': [
    {
      question: 'How does hardware migration work?',
      answer: 'We provide comprehensive migration assistance, including logistics coordination, temporary hardware if needed, and expert technicians to help with the physical move and setup. We can also help with data migration to minimize downtime.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'Our colocation packages include 24/7 remote hands support, regular equipment inspection, emergency response, and optional managed services if you want us to handle specific maintenance tasks.'
    }
  ]
};

const Partner = () => {
  return (
    <div>
      <Navbar />
      <ColocationHero />
      <div className="flex items-center justify-center gap-4  mb-20 mt-20">
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
          <p className="text-[#1D90F9] text-sm ">Prime data Center</p>
        </div>
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
      </div> 

      <div className="max-w-[85%] mx-auto relative">
        <div className="absolute -left-[35%] md:-left-[12%] lg:-left-[16%] top-[50px] z-0">
          <LazyImage src="/blue-ball.webp" alt="Blue ball" className="w-96 h-96 opacity-90" />
        </div>
        <PricingSlider />
      </div>
      <div className="flex items-center justify-center gap-4 mb-20 mt-20">
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
          <p className="text-[#1D90F9] text-sm ">FEATURED THIS MONTH</p>
        </div>
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
      </div> 
      <div className="max-w-[85%] mx-auto relative">
        <div className="absolute -right-[40%] md:-right-[18%] lg:-right-[24%] top-[50px] z-0">
          <LazyImage src="/purple-ball.webp" alt="Purple ball" className="w-96 h-96" />
        </div>
        <ServerCompare />
      </div>

      <div className="flex items-center justify-center gap-4 mb-10 mt-20">
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
          <p className="text-[#1D90F9] text-sm ">MIGRATE YOUR HARDWARE</p>
        </div>
        <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
      </div> 
      {/* Hardware Migration Section */}
      <div className="py-8 md:py-16 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 max-w-[95%] md:max-w-[90%] mx-auto relative">
        <div className="absolute -left-[35%] md:-left-[12%] lg:-left-[16%] top-[50px] z-0">
          <LazyImage src="/blue-ball.webp" alt="Blue ball" className="w-96 h-96 opacity-90" />
        </div>
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
      
      <div className="relative">
        <div className="absolute -left-[35%] md:-left-[15%] lg:-left-[20%] top-[50px] z-0">
          <LazyImage src="/blue-ball.webp" alt="Blue ball" className="w-96 h-96 opacity-90" />
        </div>
        <FAQ categories={faqCategories} faqData={faqData} />
      </div>

      <Footer />
    </div>
  )
}

export default Partner
