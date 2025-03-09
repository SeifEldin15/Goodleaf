import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import GoldHero from '../components/BronzeHero/GoldHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'

function Bronze() {
  return (
    <div>
      <Navbar />
      <GoldHero />
      <Pricing />
      <ServerCompare />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Bronze
