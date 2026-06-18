import { Link } from 'react-router-dom'
import Stats from '../components/Stats'
import HealSlider from '../components/slider/HealSlider'
import HolSlider from '../components/slider/HolSlider'
import LogoSlider from '../components/slider/LogSlider'
import ArticleCard from '../components/blog/ArticleCard'

const Home = () => {

  
  return (
    <>
        {/* main-banner */}

      <section className='main-banner'>
        <div className='banner-img'>
          <img src="/images/banner.jpg" alt="banner img" />
          <div className='container'>
            <div className='banner-txt-wrap'>
              <h4>Find Support & Healing</h4>
            <h1>guide you on your journey towards mental wellness.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='ban-btn'>
              <Link to='/ourservices' className='ban-left'>Our Services</Link>
              <Link to='/faqs' className='ban-right'>Learn More</Link>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wellness */}

      <section className='wellness'>
        <div className='container'>
          <div className='well-wrap'>
            <div className='row well-row'>
              <div className="col-lg-6 col-md-5 col-sm-12">
                <div className='well-img'>
                  <img src="/images/tea-pic.jpg" alt="tea pic" />
                </div>
              </div>
              <div className="col-lg-6 col-md-7 col-sm-12">
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
          <LogoSlider/>
        </div>
      </section>

      {/* Transformative */}

      <section className='transformative'>
        <div className='container'>
          <div className='trans-wrap'>
            <div className='formative-img'>
            <img src="/images/Transformat.jpg" alt="Transformat" />
            <button className='format-play' data-bs-toggle="modal" data-bs-target="#transform-pop"><i className="fa-solid fa-play"></i></button>
          </div>
          <div className='trams'>
            <div className='row trams-m'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='trans-l'>
                  <h4>Our Services</h4>
                  <h2 data-aos="fade-up" data-aos-duration="1000">Transformative Mental Health Services</h2>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='trans-r'>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a href="#" className='format-btn'>discover all <i className="fa-solid fa-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className='indis'>
            <div className='row therapy'>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='col-therapy'>
                    <div className='ther-one'><i className="fa-solid fa-user"></i></div>
                    <h3>Individual Therapy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className='therapy-btn'>learn more <i className="fa-solid fa-right-long"></i></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='col-therapy'>
                  <div className='ther-two'><i className="fa-solid fa-users"></i></div>
                  <h3>Couples Counseling</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className='therapy-btn'>learn more <i className="fa-solid fa-right-long"></i></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='col-therapy'>
                  <div className='ther-two'><i className="fa-solid fa-handshake"></i></div>
                  <h3>Therapy Workshops</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className='therapy-btn'>learn more <i className="fa-solid fa-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>


{/* Modal */}
<div
  className="modal fade"
  id="transform-pop"
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
          <iframe src="https://www.youtube.com/embed/rkZl2gsLUp4?si=XMcWn5TAKXxp0t8Y&fs=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>


    </div>
  </div>
</div>

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
            <img src="/images/hol-6.jpg" alt="conimg" />
            <div className='conimg-txt' data-aos="flip-left" data-aos-duration="1100">
              <h3>Live Consulting</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className='con-btn'>Get Started <i className="fa-solid fa-right-long"></i></a>
            </div>
          </div>
          <div className='upper-conimg'>
            <img src="/images/col-img.jpg" alt="conimg" />
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
  <img src="/images/priotize.jpg" alt="priotize" />
  <div className='container'>
    <div className='prio-wrap'>
      <h2 data-aos="zoom-in" data-aos-duration="1000">Ready to prioritize your mental health?</h2>
      <a href="#" className='shel-btn'>shcedule consultation <i className="fa-solid fa-right-long"></i></a>
    </div>
  </div>
</section>

{/* Stats */}

      <section className='stats'>
        <div className='container'>
          <Stats/>
        </div>
      </section>

{/* Healing */}

<section className='healing'>
  <div className='container'>
    <div className='row heal-tec'>
      <div className='col-lg-4 col-sm-12'>
        <div className='col-heal1'>
          <h4>Client Reviews</h4>
          <h2 data-aos="fade-up" data-aos-duration="1000">Hear from individuals who have Healing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
        </div>
      </div>
      <div className='col-lg-8 col-sm-12'>
        <div className='col-heal2'>
          <HealSlider/>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Tuned */}

<section className='tuned'>
  <div className='container'>
    <div className='row tun-box'>
      <div className='col-lg-6 col-sm-12'>
        <div className='col-tun-box'>
          <img src="/images/tune.jpg" alt="tune" />
          <div className='tune-time' data-aos="fade-right" data-aos-duration="1000">
            <h3>Our Business</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='tu-time-wrap'>
              <div className='tu-date'><i className="fa-regular fa-calendar"></i> Monday - Friday</div>
              <div className='tuk-time'><i className="fa-regular fa-clock"></i> 08 : 00 AM - 10 : 00 PM</div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='col-tun-rox'>
          <h4>Lets Connected</h4>
          <h2 data-aos="fade-up" data-aos-duration="1000">Stay Tuned With Us & Lets Get In Touch With Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className='tune-add'>
            <div className='tune-add-left'>
              <div className='tune-upp'>
                <h3>Head Office Address</h3>
                <p>Lumbung Hidup St 425 East Java Madiun City Block ABC</p>
              </div>
              <div className='tune-up'>
                <h3>Secondary Office</h3>
                <p>Nggepeng Village Sidomukti East Java Gresik United</p>
              </div>
              
            </div>
            <div className='tune-add-left'>
              <div className='tune-up'>
                <h3>Email Address</h3>
                <p>Hello@Email.co</p>
              </div>
              <div className='tune-up'>
                <h3>Telephone</h3>
                <p>+62 132 456 789</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

{/* Articles */}

<section className='articles'>
  <div className='container'>
    <h4>Blog Highlights</h4>
    <h2 data-aos="fade-up" data-aos-duration="1000">Dive into our collection of articles, resources, and insights</h2>
    <div className='health-art'>
      <ArticleCard/>
    </div>
  </div>
</section>



    </>
  )
}

export default Home
