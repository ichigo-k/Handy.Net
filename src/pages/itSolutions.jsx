import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/itservices/Hero'
import AboutUs from '../components/itservices/AboutUs'
import OurServices from '../components/itservices/OurServices'
import Testimonials from '../components/itservices/Testimonials'
import Faq from '../components/itservices/Faq'
import Contact from '../components/Contact'
import Cta from '../components/itservices/Cta'
import Footer from '../components/Footer'

function itSolutions() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <Testimonials/>
      <Faq/>
      <Cta/>
      <Footer/>
    </>
   
  )
}

export default itSolutions