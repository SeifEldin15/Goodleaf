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
        <Pricing />
        <Timeline />
        <Table />
        <Graph />
        <Refrences />
      </div>
      <ReviewSlider />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <FAQ />
        <Map />
      </div>
      <Footer />
    </div>
  )
}

export default Home
