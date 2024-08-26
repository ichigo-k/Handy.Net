import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <Testimonials/>
      <Faq/>
      <Contact/>
      <Cta/>
      <Footer/>
    </>
   
  )
}

export default App