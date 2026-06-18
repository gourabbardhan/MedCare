import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import OurServices from '../pages/OurServices'
import OurCases from '../pages/OurCases'
import CaseDetails from '../pages/CaseDetails'
import Faqs from '../pages/Faqs'
import OurBlog from '../pages/OurBlog'
import SingleBlog from '../pages/SingleBlog'
import MyPricing from '../pages/MyPricing'

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/ourservices' element={ <OurServices/>}/>
        <Route path='/ourpricing' element={ <MyPricing/> }/>
        <Route path='/ourcases' element={ <OurCases/>}/>
        <Route path='/casedetails' element={<CaseDetails/>}/>
        <Route path='/contactus' element={ <ContactUs/> }/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/ourblog' element={<OurBlog/>}/>
        <Route path='/singleblog' element={<SingleBlog/>}/>
        <Route path='/*' element={ <NotFound/> }/>
      </Routes>
    </div>
  )
}

export default MyRouter
