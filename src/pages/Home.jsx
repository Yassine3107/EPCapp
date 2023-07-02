import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PriceTable from '../components/Pricetable'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PriceTable/>
      <Contact/>
    </>
    
  )
}

export default Home