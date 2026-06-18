import React from 'react'
import { Link } from 'react-router-dom'
import Stats from '../components/Stats'
import TestSlider from '../components/slider/TestSlider'

const OurCases = () => {
  return (
    <>
      
      {/* mini-banner */}

      <section className='mini-banner'>
        <img src="/MedCare/images/hol-4.jpg" alt="priotize-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>Our Cases</h3>
            <h1>We Have Empowering Mental Wellness</h1>
          </div>
        </div>
      </section>


    {/* overcomes */}

    <section className='overcome'>
      <div className='container'>
        <div className='row ov-cm'>
          <div className='col-lg-5 col-md-6 col-sm-12'>
            <div className='col-ov-img'>
              <img src="/MedCare/images/ov-c.jpg" alt="ov-c" />
            </div>
          </div>
          <div className='col-lg-7 col-md-6 col-sm-12'>
            <div className='col-ov-txt'>
              <h4>Transformative Cases</h4>
              <h2 data-aos="fade-up" data-aos-duration="1000">Discover how our therapists helped clients overcome challenges</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className='skil-tim'>
                <div className='row ski-tea'>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='col-ski-mod' data-aos="fade-right" data-aos-duration="1100">
                      <img src="/MedCare/images/chinese.jpg" alt="chinese" />
                      <button className='ov-btn' data-bs-toggle="modal" data-bs-target="#ov-come"><i className="fa-solid fa-play"></i></button>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='col-ski-txt'>
                      <h3>Experienced & Skilled Team</h3>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <div className='skits-img'>
                        <img src="/MedCare/images/col-img.jpg" alt="col-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   {/* Modal-6 */}
      
       <div className="modal fade" id="ov-come" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/wqlSCZ3W-Xs?si=LqMbqOq5Jib2SyHC&fs=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Showcase */}

<section className='showcase'>
  <div className='container'>
    <h4>Explore Our Case Studies</h4>
    <h2 data-aos="fade-up" data-aos-duration="1000">Dive into our collection of case studies showcasing</h2>
    <div className='sh-cas-wrap'>
      <div className='row cas-psr'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='col-cas-psr'>
            <div className='cas-img'>
              <img src="/MedCare/images/tea-pic.jpg" alt="tea-pic" />
            </div>
            <div className='cas-txt'>
              <h5>Breaking Free from Depression</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/' className='cas-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='col-cas-psr'>
            <div className='cas-img'>
              <img src="/MedCare/images/hol-5.jpg" alt="tea-pic" />
            </div>
            <div className='cas-txt'>
              <h5>Finding Peace Amidst Anxiety</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/' className='cas-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='col-cas-psr'>
            <div className='cas-img'>
              <img src="/MedCare/images/col-img.jpg" alt="tea-pic" />
            </div>
            <div className='cas-txt'>
              <h5>Rebuilding Trust and Connection</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/' className='cas-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='col-cas-psr'>
            <div className='cas-img'>
              <img src="/MedCare/images/Transformat.jpg" alt="tea-pic" />
            </div>
            <div className='cas-txt'>
              <h5>Navigating Life Transitions Cases</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/' className='cas-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='col-cas-psr'>
            <div className='cas-img'>
              <img src="/MedCare/images/sit-pic.jpg" alt="tea-pic" />
            </div>
            <div className='cas-txt'>
              <h5>A Path to Emotional Well-Being</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/' className='cas-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='col-cas-psr'>
            <div className='cas-img'>
              <img src="/MedCare/images/hol-1.jpg" alt="tea-pic" />
            </div>
            <div className='cas-txt'>
              <h5>Cultivating Self-Care and Balance</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/' className='cas-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Stats */}

      <section className='stats'>
        <div className='container'>
          <Stats/>
        </div>
      </section>


      {/* testimonialsa */}

      <section className='testimonialsa'>
        <div className='testi-wrap-img'>
          <img src="/MedCare/images/col-img.jpg" alt="col-jpg" />
        </div>
        <div className='container'>
          <div className='texti-txt-wrap'>
            <h4>Counseling Testimonials</h4>
            <h2 data-aos="fade-up" data-aos-duration="1000">Explore heartwarming testimonials who have strengthened</h2>
            <div className='testislider'>
              <TestSlider/>
            </div>
          </div>
        </div>
      </section>




    </>
  )
}

export default OurCases
