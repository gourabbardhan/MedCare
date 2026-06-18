import React from 'react'
import { Link } from 'react-router-dom'

const MyPricing = () => {
  return (
    <>
      
     {/* pricing-banner */}

      <section className='pricing-banner'>
        <img src="images/hol-6.jpg" alt="pricing-banner" />
        <div className='container'>
          <div className='pricing-banner-wrap'>
            <h3>Our Pricing</h3>
            <h1>Transparent Pricing Packages Tailored to You</h1>
          </div>
        </div>
      </section>

      {/* Packages */}

      <section className='packages'>
        <div className='container'>
          <div className='pack-wrap'>
            <div className='f-pack'>
              <div className='l-pack'>
                <h3>Individual Package</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='amou'>
                  <div className='am-wrap'><span className='dollers'>$</span>499</div>
                  <div className='slash'>/ Session</div>
                </div>
                <div className='sess-wrap'>
                  <ul>
                    <li><i className="fa-solid fa-check"></i> Theraphy Session</li>
                    <li><i className="fa-solid fa-check"></i> Conseling Session</li>
                    <li><i className="fa-solid fa-check"></i> Mental Support</li>
                    <li><i className="fa-solid fa-check"></i> Success Guarantee</li>
                  </ul>
                </div>
                <Link to='/' className='shells-btn'>Get a Quotation</Link>

              </div>
            </div>
            <div className='mid-pack' data-aos="fade-right" data-aos-duration="1100">
              <div className='top-off'>
                Top Offer
              </div>
              <h3>Group Package</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='amou-1'>
                  <div className='am-wrap-1'><span className='dollers-1'>$</span>1,249</div>
                  <div className='slash-1'>/ Groupe</div>
                </div>
                <div className='sess-wrap-1'>
                  <ul>
                    <li><i className="fa-solid fa-check"></i> Theraphy Session</li>
                    <li><i className="fa-solid fa-check"></i> Conseling Session</li>
                    <li><i className="fa-solid fa-check"></i> Mental Support</li>
                    <li><i className="fa-solid fa-check"></i> Success Guarantee</li>
                  </ul>
                </div>
                <Link to='/' className='shells-btn'>Get a Quotation</Link>

            </div>
            <div className='f-pack'>
              <div className='l-pack'>
                <h3>Couples Package</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='amou'>
                  <div className='am-wrap'><span className='dollers'>$</span>849</div>
                  <div className='slash'>/ Session</div>
                </div>
                <div className='sess-wrap'>
                  <ul>
                    <li><i className="fa-solid fa-check"></i> Theraphy Session</li>
                    <li><i className="fa-solid fa-check"></i> Conseling Session</li>
                    <li><i className="fa-solid fa-check"></i> Mental Support</li>
                    <li><i className="fa-solid fa-check"></i> Success Guarantee</li>
                  </ul>
                </div>
                <Link to='/' className='shells-btn'>Get a Quotation</Link>

              </div>
            </div>
          </div>

          <div className='partner-p'>
            <img src="images/dep-img.jpg" alt="dep-img" />
            <div className='partm-txt'>
              <h2>Need Enterprise Partner Package ?</h2>
              <Link to='/' className='well-btn'>Contact Us Now <i className="fa-solid fa-right-long"></i></Link>
            </div>
          </div>


        </div>
      </section>

      {/* navigating */}

     <section className='navigating'>
      <div className='container'>
        <div className='row navig'>
          <div className='col-lg-8 col-md-12 col-sm-12'>
            <div className='col-nav-l'>
              <h4>Insurance Coverage Information</h4>
              <h2 data-aos="fade-up" data-aos-duration="1000">Learn more about navigating insurance coverage for mental health services</h2>
              <div className='chin-nav'>
                <div className='chin-imgs'>
                  <img src="images/chinese.jpg" alt="chinese" />
                </div>
                <div className='chin-txt'>
                  <div className='chin-txt-u'>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                      <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                    </ul>
                  </div>
                  <div className='chin-txt-b'>
                    <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12' data-aos="fade-right" data-aos-duration="1200">
            <div className='col-nav-r'>
              <img src="images/dir-1.jpg" alt="dir" />
              <button className='nave-btn' data-bs-toggle="modal" data-bs-target="#navigass"><i className="fa-solid fa-play"></i></button>
            </div>
          </div>
        </div>
      </div>
     </section> 

     {/* Modal-5 */}
      
       <div className="modal fade" id="navigass" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  <img src="images/priotize.jpg" alt="priotize" />
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

export default MyPricing
