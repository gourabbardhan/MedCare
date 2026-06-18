import React from 'react'
import LogSlider from '../components/slider/LogSlider'
import Stats from '../components/Stats'
import HolSlider from '../components/slider/HolSlider'
import DirectorCard from '../components/blog/DirectorCard'

const About = () => {
  return (
    <>

    {/* mini-banner */}

      <section className='mini-banner'>
        <img src="/images/About-banner.jpg" alt="about-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>About Us</h3>
            <h1>We Have Empowering Mental Wellness</h1>
          </div>
        </div>
      </section>
      
      {/* Wellness */}

      <section className='wellness'>
        <div className='container'>
          <div className='well-wrap'>
            <div className='row well-row'>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className='well-img'>
                  <img src="/images/tea-pic.jpg" alt="tea pic" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className='well-contant'>
                  <h4>Empowering Mental Wellness</h4>
                  <h2 data-aos="fade-up" data-aos-duration="1000">At Our Business Company we believe in the power of mental wellness.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  <div className='check'>
                    <div className='upper-che'><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                    <div className='lower-che'><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur</div> 
                  </div>
                  <a href="#" className='well-btn'>learn more <i className="fa-solid fa-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* logo-slider */}
      
            <section className='logo-slider'>
              <div className='container'>
                <LogSlider/>
              </div>
            </section>
      
      {/* Ab-wellness */}

      <section className='ab-wellness'>
        <div className='container'>
          <div className='ab-well-wrap'>
            <div className='upper-ab-wrap'>
              <div className='row afri-girl'>
                <div className='col-lg-8 col-md-8 col-sm-12'>
                  <div className='col-afri-txt'>
                    <h4>Our Vision Mission</h4>
                    <h2>our mission is to empower individuals to achieve mental wellness and live fulfilling lives.</h2>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className='col-afri-img'>
                    <img src="/images/African-girl.jpg" alt="african-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className='lower-ab-wrap'>
              <div className='row ab-yoga'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className='col-ab-yoga'>
                    <img src="/images/banner.jpg" alt="banner" />
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className='col-ab-mid'>
                    <h3>” Lorem ipsum dolor sit amet, consectetur adipiscing elit sed “</h3>
                    <div className='ab-listyog'>
                      <ul>
                        <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet</li>
                        <li><i className="fa-solid fa-check"></i> Sit amet consectetur</li>
                        <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className='col-ab-last'>
                    <div className='ab-last-upper'>
                      <div className='ab-colum'></div>
                      <div className='ab-coltxt'>
                        <p>” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. “</p>
                      </div>
                    </div>
                    <div className='ab-last-lower'>
                      <div className='ab-check'><i className="fa-solid fa-check"></i></div>
                      <div className='ab-check-txt'>
                        <h3>We're dedicated</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blank */}

      <section className='blank'></section>
    

    {/* Process */}

<section className='process'>
  <div className='container'>
    <div className='upper-process'>
      <div className='upper-proleft'>
        <h4>Our Procsess</h4>
        <h2 data-aos="fade-up" data-aos-duration="1000">The process begins get Our Mental Health Service</h2>
      </div>
      <div className='upper-proright'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br />

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <div className='lower-process'>
      <div className='row low-process'>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='col-process'>
            <h2>01</h2>
            <h3>Initial Consultation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='col-process'>
            <h2>02</h2>
            <h3>Treatment Plan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='col-process' data-aos="fade-right" data-aos-duration="2000">
            <h2>03</h2>
            <h3>Therapy Sessions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='col-process'>
            <h2>04</h2>
            <h3>Ongoing Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Dedicated */}

<section className='dedicated'>
  <div className='container'>
    <h4>Meet Our Team</h4>
    <h2>The dedicated professionals who make up our team.</h2>
    <div className='dirl'>
      <DirectorCard/>
    </div>
  </div>
</section> 

{/* Stats */}

      <section className='stats'>
        <div className='container'>
          <Stats/>
        </div>
      </section>



      {/* Holistic */}

       <section className='holistic'>
        <div className='container'>
          <div className='row hol-row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='col-hol-pic'>
                <div className='double-pic'>
                  <div className='double-left-pic'><img src="/images/hol-2.jpg" alt="hol-pic" /></div>
                  <div className='double-left-pic'><img src="/images/hol-1.jpg" alt="hol-pic" /></div>
                </div>
                <div className='one-pic'>
                  <img src="/images/hol-3.jpg" alt="hol-pic" />
                  <button className='format-play-twice' data-bs-toggle="modal" data-bs-target="#hol-popup"><i className="fa-solid fa-play"></i></button>
                </div>
              </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='col-hol-txt'>
                <h4>Our Approach</h4>
                <h2 data-aos="fade-up" data-aos-duration="1000">Our approach to mental health is holistic and individualized.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a href="#" className='hol-btn'>learn more <i className="fa-solid fa-right-long"></i></a>
                <div className='holislide'><HolSlider/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal-2 */}
<div
  className="modal fade"
  id="hol-popup"
  tabIndex="-1"
>
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">

      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>

      <div className="modal-body">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/7cqzSNgNo1M?si=ie_eQlBTTkgCPr0m&fs=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>

    </div>
  </div>
</div>

{/* Ab-Schedule */}

<section className='ab-schedule'>
  <img src="/images/Lonely-girl.jpg" alt="lonely-img" />
  <div className='container'>
    <div className='schedu-txt'>
      <h3>Lets Get Started</h3>
      <h2>Contact us to schedule a consultation.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <a href="#" className='hol-btn'>contact us <i className="fa-solid fa-right-long"></i></a>
    </div>
  </div>
</section>



    </>
  )
}

export default About
