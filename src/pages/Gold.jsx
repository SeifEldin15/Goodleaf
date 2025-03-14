import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import GoldHero from '../components/SecondaryHero/GoldHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'

function Gold() {
  return (
    <div>
      <Navbar />
      <GoldHero />
      <div className='container mx-auto max-w-[85%] px-4'>
        <Pricing />
        <ServerCompare />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Gold