import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"

import MyRouter from './router/MyRouter'
import FixCircle from './components/layout/FixCircle'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  const location = useLocation();

  // Show The Top Screen
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>

      <Navbar/>
      <MyRouter />
      <Footer/>
      <FixCircle />
      
    </>
  )
}

export default App;
