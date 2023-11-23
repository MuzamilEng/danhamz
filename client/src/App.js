import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import Carrers from './app/pages/Carrers'
import KnowledgeBank from './app/pages/KnowledgeBank'
import NewsComponent from './app/pages/News'
import About from './app/pages/About'
import InstantValuation from './app/pages/InstantValuation'
import Contact from './app/pages/Contact'
import Report from './app/pages/Report'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrers' element={<Carrers />} />
        <Route path='/knowledge-bank' element={<KnowledgeBank />} />
        <Route path='/news' element={<NewsComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/instant-valuation' element={<InstantValuation />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/report' element={<Report />} />



      </Routes>
    </>
  )
}

export default App