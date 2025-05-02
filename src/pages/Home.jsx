import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Pricing from '../components/Pricing/Pricing'
import LogoSlider from '../components/LogoSlider/LogoSlider'
import OSes from '../components/OSes/OSes'
import Table from '../components/Table/Table'
import Footer from '../components/Footer/Footer'
import Graph from '../components/Graph/Graph'
import FAQ from '../components/FAQ/FAQ'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import Refrences from '../components/Refrences/Refrences'
import Timeline from '../components/Timeline/Timeline'
import Map from '../components/Map/Map'

const plans = [
    {
      title: "Ryzen VDS",
      price: "24.99",
      labels: [], // Adapted from image (no labels shown)
      features: [
        "Ryzen CPU",
        "Unlimited Bandwidth",
        "Custom OS Allowed",
        "NVMe Storage",
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection" // Combined "Top Features" and "Always Includes"
      ],
      location: "Ashburn, Virginia & Dallas, Texas" // Kept existing location info
    },{
      title: "Intel+ VPS",
      price: "12.99",
      labels: [],
      features: [
        "Intel CPU",
        "Unlimited Bandwidth",
        "Custom OS Allowed",
        "NVMe Storage",
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },{
      title: "Intel VPS",
      price: "9.99",
      labels: [],
      features: [
        "Intel CPU",
        "Unlimited Bandwidth",
        "Custom OS Allowed",
        "NVMe or HDD Storage", // Specific feature from image
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection"
      ],
      location: "Ashburn, Virginia & Dallas, Texas",
    },{
      title: "Dedicated",
      price: "99.99",
      labels: [],
      features: [
        "Ryzen 7 Series CPU", // Specific feature from image
        "Unlimited Bandwidth",
        "Bare Metal Server",    // Specific feature from image
        "NVMe Storage",
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    }
  ];

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4  mb-[50px]'>
        <LogoSlider />
      </div>
      <OSes />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <Pricing plans={plans} />
        <div className='mt-[100px] flex justify-center mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
          <Timeline />
        </div>
        <div className='mt-[50px] mx-auto max-w-[95%] px-4'>
          <Table />
        </div>
        <div className='mt-[100px] mx-auto max-w-[95%] px-4'>
          <Graph />
        </div>
        <Refrences />
      </div>
      <ReviewSlider />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <FAQ />
      </div>
      <Map />
      <Footer />
    </div>
  )
}

export default Home