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
import Performance from '../components/Performance/Performance'
import Refrences from '../components/Refrences/Refrences'
import Timeline from '../components/Timeline/Timeline'
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='mt-[600px]'>
        <Pricing />
      </div>
      <LogoSlider />
      <OSes />
      <Table />
      <Graph />
      <FAQ />
      <ReviewSlider />
      <Performance />
      <Timeline />
      <Refrences />
      <Footer />
    </div>
  )
}

export default Home
