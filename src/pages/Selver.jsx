import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SelverHero from '../components/BronzeHero/SelverHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'

function Bronze() {
  return (
    <div>
      <Navbar />
      <SelverHero />
      <Pricing />
      <ServerCompare />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Bronze
