import React from 'react'
import GamingHero from '../components/SecondaryHero/GamingHero'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import FAQ from '../components/FAQ/FAQ'
function Gaming() {
  return (
    <div>
      <Navbar />
      <GamingHero />
      <ReviewSlider />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Gaming
