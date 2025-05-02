import React from 'react'
import GamingHero from '../components/SecondaryHero/GamingHero'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import PricingSlider from '../components/PricingSlider/PricingSlider'
import FAQ from '../components/FAQ/FAQ'

const faqCategories = [
  {
    title: 'Gaming Servers',
    description: 'Information about our specialized gaming hosting.'
  },
  {
    title: 'Performance & Optimization',
    description: 'Technical details about gaming performance.'
  },
  {
    title: 'Game Support',
    description: 'Game compatibility and server management.'
  }
];

const faqData = {
  'Gaming Servers': [
    {
      question: 'What makes your gaming servers special?',
      answer: 'Our gaming servers are specifically optimized for low latency and high performance with dedicated CPU cores, enhanced network routes, and specialized configurations to prevent lag spikes. We use the latest hardware with overclocking capabilities and game-specific optimizations.'
    },
    {
      question: 'Can I host any type of game server?',
      answer: 'Yes, our gaming VPS solutions support all major game server types including Minecraft, ARK, Rust, CS:GO, Valheim, and many more. Our platform provides the flexibility to install custom game servers and mods as needed.'
    }
  ],
  'Performance & Optimization': [
    {
      question: 'How does your anti-DDoS protection work for gaming?',
      answer: 'Our gaming-specific DDoS protection is designed to mitigate attacks without adding latency. It can handle volumetric attacks up to 1Tbps while maintaining game server responsiveness and performance even during active mitigation.'
    },
    {
      question: 'What ping times can I expect?',
      answer: 'Our gaming servers typically deliver ping times of 10-30ms within the same region. We have multiple points of presence and gaming-optimized network routes to ensure the lowest possible latency for your players across North America.'
    }
  ],
  'Game Support': [
    {
      question: 'Do you offer game server management?',
      answer: 'Yes, we offer optional managed game server services that include setup, configuration, mod installation, regular updates, performance optimization, and 24/7 monitoring specifically for your game servers.'
    },
    {
      question: 'How many players can your servers support?',
      answer: 'Player capacity depends on the specific game and server plan chosen. Our entry-level gaming servers can typically support 10-30 concurrent players for most games, while our high-end plans can handle 100+ players with proper optimization.'
    }
  ]
};

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
      <FAQ categories={faqCategories} faqData={faqData} />
      </div>
      <Footer />
    </div>
  )
}

export default Gaming
