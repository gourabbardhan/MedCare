import React from 'react'
import { Link } from 'react-router-dom'
import FooterEmail from '../FooterEmail'

const Footer = () => {
  return (
    <>

    <section className='main-footer'>
      <div className='container'>
        <div className='upper-footer'>
          <div className='row foot-row'>
            <div className='col-lg-5 col-md-4 col-sm-12'>
              <div className='col-footlogo'>
                <img src="/MedCare/images/Minds-dark.png" alt="Logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='foot-mailwrap'>
                  <FooterEmail/>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-8 col-sm-12'>
              <div className='foot-list'>
                <div className='row quicklist'>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='col-quicklist'>
                      <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/"><i className="fa-solid fa-play"></i> Homepage</Link></li>
                  <li><Link to="/about"><i className="fa-solid fa-play"></i> About Us</Link></li>
                  <li><Link to="/ourservices"><i className="fa-solid fa-play"></i> Our Services</Link></li>
                  <li><Link to="/ourcases"><i className="fa-solid fa-play"></i> Our Cases</Link></li>
                  <li><Link to="/contactus"><i className="fa-solid fa-play"></i> Contact Us</Link></li>
                </ul>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='col-quicklist'>
                      <h3>Our Services</h3>
                <ul>
                  <li><Link to="/"><i className="fa-solid fa-play"></i> Mentalh Illness</Link></li>
                  <li><Link to="/"><i className="fa-solid fa-play"></i> Mental Health</Link></li>
                  <li><Link to="/"><i className="fa-solid fa-play"></i> Live Coach</Link></li>
                  <li><Link to="/"><i className="fa-solid fa-play"></i> Consulting</Link></li>
                  <li><Link to="/"><i className="fa-solid fa-play"></i> Mental Development</Link></li>
                </ul>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='col-quicklist foot-wrap'>
                      <div className='foot-wrapup'>
                        <h3>Head Office Address</h3>
                        <p>Lumbung Hidup St 425 East Java Madiun City Block ABC 123</p>
                      </div>
                      <div className='foot-wrapup'>
                        <h3>Days Open</h3>
                        <p>Monday - Friday 08 AM - 10 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lower-footer'>
          <div className='lower-footleft'>
            <a href="#">Allright REserved - Dirastudio Elementor Kit</a>
          </div>
          <div className='lower-footright'>
            <a href="https://www.facebook.com/" target='_blank' className='footer-social'><i className="fa-brands fa-facebook-f trt"></i></a>
            <a href="https://x.com/" target='_blank' className='footer-social'><i className="fa-brands fa-twitter trt"></i></a>
            <a href="https://www.youtube.com/" target='_blank' className='footer-social'><i className="fa-brands fa-youtube trt"></i></a>
            <a href="https://in.pinterest.com/" target='_blank' className='footer-social'><i className="fa-brands fa-pinterest-p trt"></i></a>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Footer
