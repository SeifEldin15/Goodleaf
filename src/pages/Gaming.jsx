import React from 'react'
import GamingHero from '../components/SecondaryHero/GamingHero'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import PricingSlider from '../components/PricingSlider/PricingSlider'
import FAQ from '../components/FAQ/FAQ'
import LazyImage from '../components/LazyImage/LazyImage'
import FiveMWalkthrough from '../components/FiveMWalkthrough'
import FeaturesPanel from '../components/FeatureCards/FeaturesPanel'

const faqCategories = [
  {
    title: 'FiveM Frequently Asked Questions',
    description: 'Common questions about our FiveM server hosting.'
  }
];

const faqData = {
  'FiveM Frequently Asked Questions': [
    {
      question: 'How many player slots can I have for my FiveM Server?',
      answer: 'The number of player slots is capped at 48 by the FiveM Licensing System. Refer to FiveM\'s Patreon to increase player slots above this. Our FiveM Server Hosting packages do not impose limits on the number of players.'
    },
    {
      question: 'What frameworks do you support for FiveM Server Hosting?',
      answer: 'We support a wide range of popular frameworks. We have premade installers for ESX, QBCORE, and vMenu frameworks. If you need a different framework, contact our support team for more information.'
    },
    {
      question: 'How robust is your DDoS protection for FiveM Servers?',
      answer: 'Our FiveM Server Hosting comes with tailored DDoS protection, offering a robust shield of up to 17TBPS. This ensures that your server remains online 24/7, unaffected by potential threats.'
    },
    {
      question: 'How often do you update the FiveM version?',
      answer: 'Our FiveM Server Hosting packages include an automatic updater, which you can choose to turn on or off. This ensures your server always runs on the latest FiveM artifacts version automatically.'
    },
    {
      question: 'Do you offer TxAdmin with your FiveM Server Hosting?',
      answer: 'Yes, we provide TxAdmin with our FiveM Server Hosting packages. This ensures that you have comprehensive and full control over your server at all times.'
    }
  ]
};

// Helper for randomized ball classes
const gamingBalls = [
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[34rem] h-[34rem] opacity-90 -left-[32%] md:-left-[10%] lg:-left-[18%] top-[40px]" },
  { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[36rem] h-[36rem] -right-[38%] md:-right-[40%] lg:-right-[45%] top-[100px]" },
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[38rem] h-[38rem] opacity-90 -left-[32%] md:-left-[10%] lg:-left-[18%] top-[50px]" },
  { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[32rem] h-[32rem] -right-[28%] md:-right-[18%] lg:-right-[23%] top-[600px]" },
  { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[30rem] h-[30rem] opacity-90 -left-[20%] md:-left-[8%] lg:-left-[12%] top-[900px]" },
  { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[40rem] h-[40rem] -right-[35%] md:-right-[25%] lg:-right-[30%] top-[1300px]" },
];

function Gaming() {
  return (
    <div>
      <Navbar />
      <GamingHero />
      <div className="relative">
        <div className={`absolute z-0 ${gamingBalls[0].className}`}>
          <img src={gamingBalls[0].src} alt={gamingBalls[0].alt} className="w-full h-full opacity-90" />
        </div>
        <ReviewSlider />
      </div>
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
        <div className="relative">
          <div className={`absolute z-0 ${gamingBalls[1].className}`}>
            <img src={gamingBalls[1].src} alt={gamingBalls[1].alt} className="w-full h-full" />
          </div>
          <PricingSlider />
        </div>
        <div className="relative">
          <div className={`absolute z-0 ${gamingBalls[2].className}`}>
            <img src={gamingBalls[2].src} alt={gamingBalls[2].alt} className="w-full h-full opacity-90" />
          </div>
          <div className={`absolute z-0 ${gamingBalls[3].className}`}>
            <img src={gamingBalls[3].src} alt={gamingBalls[3].alt} className="w-full h-full" />
          </div>
          <div className={`absolute z-0 ${gamingBalls[4].className}`}>
            <img src={gamingBalls[4].src} alt={gamingBalls[4].alt} className="w-full h-full opacity-90" />
          </div>
          <div className={`absolute z-0 ${gamingBalls[5].className}`}>
            <img src={gamingBalls[5].src} alt={gamingBalls[5].alt} className="w-full h-full" />
          </div>
          <div className='max-w-[95%] md:max-w-[85%] lg:max-w-[85%] mx-auto mt-24'>
            <FeaturesPanel />
            <div className='max-w-[95%] md:max-w-[85%] lg:max-w-[85%] mx-auto mt-12'></div>
            <FiveMWalkthrough />
          </div>
          <FAQ categories={faqCategories} faqData={faqData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gaming
