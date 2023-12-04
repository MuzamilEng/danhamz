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
import Signup from './app/pages/Signup'
import Professionals from './app/pages/Lettings/Professionals'
import Students from './app/pages/Lettings/Students'
import Landlord from './app/pages/Lettings/Landlord'
import ReferAfriend from './app/pages/Lettings/ReferAfriend'
import LetOrSell from './app/pages/Lettings/LetOrSell'
import SearchProperty from './app/pages/SearchProperty'
import Buyers from './app/pages/Sales/Buyers'
import Mortgages from './app/pages/Sales/Mortgages'
import InvestmentSales from './app/pages/Sales/InvestmentSales';
import Auction from './app/pages/Sales/Auction';
import PropertyValue from './app/pages/Sales/propertyValue';

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
        <Route path='/login' element={<Signup />} />
        <Route path='/professionals' element={<Professionals />} />
        <Route path='/students' element={<Students />} />
        <Route path='/landlords' element={<Landlord />} />
        <Route path='/let-or-sell' element={<LetOrSell />} />
        <Route path='/refer-a-friend' element={<ReferAfriend />} />
        <Route path='/search-property' element={<SearchProperty />} />
        <Route path='/buy-a-btl' element={<Buyers />} />
        <Route path='/investments-sales' element={<InvestmentSales />} />
        <Route path='/mortgages' element={<Mortgages />} />
        <Route path='/auction' element={<Auction />} />
        <Route path='/value-my-property' element={<PropertyValue />} />
      </Routes>
    </>
  )
}

export default App