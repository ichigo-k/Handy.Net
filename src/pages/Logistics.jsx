import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/logistics/Hero'
import SubHero from "../components/logistics/SubHero"
import AboutUs from '../components/logistics/AboutUs'
import WhyUs from '../components/logistics/WhyUs'

function Logistics() {
  return (
    <div>
        <Navbar log="true" />
        <Hero/>
        <SubHero/>
        <AboutUs/>
        <WhyUs/>
        <Footer/>
    </div>
  )
}

export default Logistics