import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PriceTable from '../components/Pricetable'
import WhyUs from '../components/WhyUs'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PriceTable/>
      <WhyUs/>
      <Contact/>
      <Footer/>
    </>
    
  )
}

export default Home