import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";

function LogSlider() {
  const location = useLocation();
  const [slidesToShow, setSlidesToShow] = useState(getSlidesCount());

  function getSlidesCount() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return 1;
      if (width <= 768) return 2; 
      if (width <= 1024) return 3;
      return 4;                  
    }
    return 4;
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
    arrows: false,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider key={location.key} {...settings}>
        <div className="logon-wrap">
          <div className="logo-n"><img src="images/Frame.png" alt="logo-slide"/></div>
        </div>
        <div className="logon-wrap">
          <div className="logo-n"><img src="images/Frame-1.png" alt="logo-slide"/></div>
        </div>
        <div className="logon-wrap">
          <div className="logo-n"><img src="images/Frame-2.png" alt="logo-slide"/></div>
        </div>
        <div className="logon-wrap">
          <div className="logo-n"><img src="images/Frame-3.png" alt="logo-slide"/></div>
        </div>
        <div className="logon-wrap">
          <div className="logo-n"><img src="images/Frame-4.png" alt="logo-slide"/></div>
        </div> 
      </Slider>
    </div>
  );
}

export default LogSlider;
