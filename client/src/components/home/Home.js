import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Footer from './Footer'
import Header from './Header'
import AboutUs from './AboutUs'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  )
}
