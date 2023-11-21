import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import Carrers from './app/pages/Carrers'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrers' element={<Carrers />} />
      </Routes>
    </>
  )
}

export default App