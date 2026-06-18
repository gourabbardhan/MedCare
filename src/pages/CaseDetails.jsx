import React from 'react'
import SkillBar from '../components/SkillBar'

const CaseDetails = () => {
  return (
    <>
      
     
      {/* mini-banner */}

      <section className='mini-banner'>
        <img src="/images/sit-pic.jpg" alt="sit-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>Case Detail</h3>
            <h1>Breaking Free from Depression</h1>
          </div>
        </div>
      </section>

      {/* depressions */}

      <section className='depressions'>
        <div className='container'>
          <div className='depre-wrap'>
            <div className='depre-img'>
              <img src="/images/dep-img.jpg" alt="dep-img" />
              <button className='dep-btn' data-bs-toggle="modal" data-bs-target="#dep-sel"><i className="fa-solid fa-play"></i></button>
            </div>
            <div className='depre-bar'>
              <div className='row dpre-wrap'>
                <div className='col-lg-8 col-md-6 col-sm-12'>
                  <div className='col-left-dpre'>
                    <h4>Case Overview</h4>
                    <h2 data-aos="fade-up" data-aos-duration="1000">Dive into the inspiring journey of Breaking Free from Depression</h2>
                    <div className='para-dep'>
                      <ul>
                        <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
                        <li><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                      </ul>
                    </div>
                    <div className='dep-check'>
                      <div className='checks-up'><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                      <div className='checks-up'><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur</div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                  <div className='col-right-dpre'>
                    <h3>Client Background</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className='bar-beat'>
                      <ul>
                        <li><i className="fa-solid fa-heart-pulse ba-icon"></i> Heathy Life</li>
                        <li><i className="fa-solid fa-building ba-icon"></i> Work Life Balance</li>
                      </ul>
                    </div>
                    <div className='men-bar'>
                      <h5>Mental Health Back</h5>
                      <SkillBar/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal-4 */}
      
       <div className="modal fade" id="dep-sel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/VbT2wQq5jQY?si=OXTguN2GEWFUfInD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  </div>
</div>

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

{/* Prioritize */}

<section className='prioritize'>
  <img src="/images/priotize.jpg" alt="priotize" />
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

export default CaseDetails
