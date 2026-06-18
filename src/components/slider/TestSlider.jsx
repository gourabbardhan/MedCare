import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';

const TestSlider = () => {
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
        <div className='testic-wrap'>
            <div className='test-img'>
            <div className='monial-img'>
                <img src="/images/docs-12.jpg" alt="hol-pic" />
            </div>
            <h3>Arjune Erigaisi</h3>
            <h5>Doctor</h5>
            <div className='sta-wraps'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus qui inventore dolorem similique est libero autem placeat nemo, accusantium doloremque eius, odio esse nesciunt, quia eum! Maxime, sapiente iusto.</p>
        </div>
        </div>

        <div className='testic-wrap'>
            <div className='test-img'>
            <div className='monial-img'>
                <img src="/images/doc-11.jpg" alt="hol-pic" />
            </div>
            <h3>Divya Sardah</h3>
            <h5>Doctor</h5>
            <div className='sta-wraps'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus qui inventore dolorem similique est libero autem placeat nemo, accusantium doloremque eius, odio esse nesciunt, quia eum! Maxime, sapiente iusto.</p>
        </div>
        </div>
        

        <div className='testic-wrap'>
            <div className='test-img'>
            <div className='monial-img'>
                <img src="/images/docs-12.jpg" alt="hol-pic" />
            </div>
            <h3>Arjune Erigaisi</h3>
            <h5>Doctor</h5>
            <div className='sta-wraps'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus qui inventore dolorem similique est libero autem placeat nemo, accusantium doloremque eius, odio esse nesciunt, quia eum! Maxime, sapiente iusto.</p>
        </div>
        </div>
        
       </Slider>



    </div>
  )
}

export default TestSlider
