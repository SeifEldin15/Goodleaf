import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SilverHero from '../components/BronzeHero/SilverHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'

function Bronze() {
  return (
    <div>
      <Navbar />
      <SilverHero />
      <Pricing />
      <ServerCompare />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Bronze
