import React from 'react'
import { Routes, Route } from 'react-router'
import ItSolutions from './pages/itSolutions'
import ErrorRoute from './pages/ErrorRoute'

function App() {
  return (
  <Routes>
      <Route index element={<ItSolutions/>} />
      <Route path='*' element={<ErrorRoute/>} />
  </Routes>
   
  )
}

export default App