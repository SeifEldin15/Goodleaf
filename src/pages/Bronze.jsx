import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BronzeHero from '../components/SecondaryHero/BronzeHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'

function Bronze() {
  return (
    <div>
      <Navbar />
      <BronzeHero />
      <div className='container mx-auto max-w-[85%] px-4'>
        <Pricing />
        <ServerCompare />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Bronze
