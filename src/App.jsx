import React from 'react'
import { Routes, Route } from 'react-router'
import ItSolutions from './pages/itSolutions'
import Logistics from './pages/Logistics'
import Contact from './pages/ContactUs'
import ErrorRoute from './pages/ErrorRoute'

function App() {
  return (
  <Routes>
      <Route index element={<Logistics/>} />
      <Route path="/itServices" element={<ItSolutions/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='*' element={<ErrorRoute/>} />
  </Routes>
   
  )
}

export default App