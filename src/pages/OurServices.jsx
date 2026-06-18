import React from 'react'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    <>
      
     {/* mini-banner */}

      <section className='mini-banner'>
        <img src="/MedCare/images/priotize.jpg" alt="priotize-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>Our Services</h3>
            <h1>Explore Our Range Of Services Can Do</h1>
          </div>
        </div>
      </section>

      {/* Conseling */}

      <section className='conseling'>
        <div className='container'>
          <div className='row seling'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='col-seling-left'>
                <h4>Key Features</h4>
                <h2 data-aos="fade-up" data-aos-duration="1000">Transformative Therapy and Counseling Services</h2>
                <div className='old-boss'>
                  <img src="/MedCare/images/col-img.jpg" alt="old-boss" />
                  <button className='old-btns' data-bs-toggle="modal" data-bs-target="#con-sel"><i className="fa-solid fa-play"></i></button>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='col-seling-right'>
                <div className='seling-boss-img'>
                  <img src="/MedCare/images/tea-pic.jpg" alt="tea-pic" />
                </div>
                <h3>15 Years Of Experienced</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div className='bosul'>
                  <ul>
                    <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal-3 */}
      
       <div className="modal fade" id="con-sel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/rkZl2gsLUp4?si=XMcWn5TAKXxp0t8Y&fs=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Teletherapy */}

<section className='teletherapy'>
  <div className='container'>
    <h4>Our Services</h4>
    <h2 data-aos="fade-up" data-aos-duration="1000">Transformative Mental Health Services</h2>

    <div className='row tele'>
      <div className='col-lg-4 col-md-6 col-sm-12' data-aos="fade-right" data-aos-duration="1100">
        <div className='col-tele' >
          <div className='tele-ico'><i className="fa-solid fa-user my-icons"></i></div>
          <h3>Individual Therapy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to='/' className='tele-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='col-tele'>
          <div className='tele-ico'><i className="fa-solid fa-users my-icons"></i></div>
          <h3>Couples Counseling</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to='/' className='tele-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='col-tele'>
          <div className='tele-ico'><i className="fa-brands fa-angellist my-icons"></i></div>
          <h3>Therapy Workshops</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to='/' className='tele-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='col-tele'>
          <div className='tele-ico'><i className="fa-solid fa-handshake my-icons"></i></div>
          <h3>Therapy and Counseling</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to='/' className='tele-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='col-tele'>
          <div className='tele-ico'><i className="fa-brands fa-twitch my-icons"></i></div>
          <h3>Teletherapy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to='/' className='tele-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='col-tele'>
          <div className='tele-ico'><i className="fa-solid fa-shield-halved my-icons"></i></div>
          <h3>Specialized Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to='/' className='tele-btn'>learn more <i className="fa-solid fa-right-long"></i></Link>
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
      

      {/* Consulting */}

<section className='consulting'>
  <div className='container'>
    <div className='row consult'>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className='col-conimg'>
          <div className='upper-conimg'>
            <img src="/MedCare/images/hol-6.jpg" alt="conimg" />
            <div className='conimg-txt' data-aos="flip-left" data-aos-duration="1100">
              <h3>Live Consulting</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className='con-btn'>Get Started <i className="fa-solid fa-right-long"></i></a>
            </div>
          </div>
          <div className='upper-conimg'>
            <img src="/MedCare/images/col-img.jpg" alt="conimg" />
            <div className='conimg-txt' data-aos="flip-left" data-aos-duration="1100">
              <h3>Expert Package</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className='con-btn'>See Pricing <i className="fa-solid fa-right-long"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className='col-contxt'>
          <h4>compassionate care</h4>
          <h2 data-aos="fade-up" data-aos-duration="1000">Support you on your journey to mental wellness.</h2>
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
</section>

      {/* Prioritize */}

<section className='prioritize'>
  <img src="/MedCare/images/priotize.jpg" alt="priotize" />
  <div className='container'>
    <div className='prio-wrap'>
      <h2 data-aos="zoom-in" data-aos-duration="1000">Ready to prioritize your mental health?</h2>
      <a href="#" className='shel-btn'>shcedule consultation <i className="fa-solid fa-right-long"></i></a>
    </div>
  </div>
</section>

    </>
  )
}

export default OurServices
