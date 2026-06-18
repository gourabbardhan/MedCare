import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';

const HealSlider = () => {
  const location = useLocation();
  const [slidesToShow, setSlidesToShow] = useState(getSlidesCount());

  function getSlidesCount() {
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
    arrows: false,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider key={location.key} {...settings}>
        <div className='heal-wrap'>
          <div className='heal-cov'>
            <div className='starpack'>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='cli-wrap'>
              <div className='cli-img'><img src="/MedCare/images/tea-pic.jpg" alt="tea-pic" /></div>
              <div className='cli-txt'>
                <h3>john doe</h3>
                <h4>clients</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='heal-wrap'>
          <div className='heal-cov'>
            <div className='starpack'>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='cli-wrap'>
              <div className='cli-img'><img src="/MedCare/images/tea-pic.jpg" alt="tea-pic" /></div>
              <div className='cli-txt'>
                <h3>john doe</h3>
                <h4>clients</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='heal-wrap'>
          <div className='heal-cov'>
            <div className='starpack'>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
              <div className='heal-star'><i className="fa-solid fa-star"></i></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='cli-wrap'>
              <div className='cli-img'><img src="/MedCare/images/tea-pic.jpg" alt="tea-pic" /></div>
              <div className='cli-txt'>
                <h3>john doe</h3>
                <h4>clients</h4>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HealSlider;
