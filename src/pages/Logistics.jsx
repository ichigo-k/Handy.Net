import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/logistics/Hero'
import SubHero from "../components/logistics/SubHero"
import AboutUs from '../components/logistics/AboutUs'
import WhyUs from '../components/logistics/WhyUs'
import Cta from '../components/logistics/Cta'
import SubCta from '../components/logistics/SubCta'

function Logistics() {
  return (
     <div>
        <Navbar log="true" title="true" />
        <Hero/>
        <SubHero/>
        <AboutUs/>
        <SubCta/>
        <WhyUs/>
        <Cta/>
        <Footer/>
 </div>

  )
}

export default Logistics