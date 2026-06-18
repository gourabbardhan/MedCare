import React from 'react'
import MessageForm from '../components/MessageForm'

const ContactUs = () => {
  return (
    <>
      
      {/* mini-banner */}

      <section className='mini-banner'>
        <img src="/MedCare/images/cont-banner.jpg" alt="cont-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>Contact Us</h3>
            <h1>Lets Get In Touch With Our Professionals</h1>
          </div>
        </div>
      </section>

      {/* Connected */}

      <section className='connected'>
        <div className='container'>
          <div className='row conts-det'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
               <div className='col-left-det'>
                <h4>Lets Connected</h4>
                <h2 data-aos="fade-up" data-aos-duration="600">Stay Tuned With Us & Lets Get In Touch With Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='secondary'>
                  <div className='row secon-off'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='col-secon-off' data-aos="fade-right" data-aos-duration="900">
                        <h3>Head Office Address</h3>
                        <p>Lumbung Hidup St 425 East Java Madiun City Block ABC</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='col-secon-off'>
                        <h3>Secondary Office</h3>
                        <p>Nggepeng Village Sidomukti East Java Gresik United</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='col-secon-off'>
                        <h3>Email Address</h3>
                        <p>Hello@Email.co</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='col-secon-off'>
                        <h3>Telephone</h3>
                        <p>+62 132 456 789</p>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='cont-right-det'>
                <h2 data-aos="fade-up" data-aos-duration="1000">Feel free to reach out & Leave a Message For Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='mess-form'>
                  <MessageForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapping */}

      <section className='mapping'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939559.8699403619!2d86.40358582247212!3d23.091393963402137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270d0974516b7%3A0xbce6eee1f2afe56!2sMental%20Health%20Research%20Centre!5e0!3m2!1sen!2sin!4v1780819863595!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>




    </>
  )
}

export default ContactUs
