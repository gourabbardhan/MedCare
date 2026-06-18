import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';

const HolSlider = () => {
   
  const location = useLocation();
  const [slidesToShow, setSlidesToShow] = useState(getSlidesCount());

  function getSlidesCount(){
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 768) return 1;
      return 2;
    }
    return 2;
  }

  useEffect(() => {
      const handleResize = () => {
        setSlidesToShow(getSlidesCount());
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); 
  
      return () => window.removeEventListener('resize', handleResize);
    }, [location.pathname]);


    const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows:false,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,

  };
  return (
    <div>
      <Slider key={location.key} {...settings}>
        <div className='hols-img-wrap'>
          <div className='hol-img'><img src="/MedCare/images/hol-4.jpg" alt="hol-pic" /></div>
        </div>
        <div className='hols-img-wrap'>
          <div className='hol-img'><img src="/MedCare/images/hol-5.jpg" alt="hol-pic" /></div>
        </div>
        <div className='hols-img-wrap'>
          <div className='hol-img'><img src="/MedCare/images/hol-6.jpg" alt="hol-pic" /></div>
        </div>
        
      </Slider>
    </div>
  );
}

export default HolSlider
