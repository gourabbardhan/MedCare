import React from 'react'
import ReachForm from '../components/ReachForm'

const Faqs = () => {
  return (
    <>

      {/* mini-banner */}

      <section className='mini-banner'>
        <img src="images/faq-banner.jpg" alt="faq-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>faq</h3>
            <h1>Answers to Your General Inquiries Question</h1>
          </div>
        </div>
      </section>

      {/* Questions */}

      <section className='question'>
        <div className='container'>
          <div className='row ques-drop'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='col-qes-lef'>
                <h4>Question Answer</h4>
                <h2 data-aos="fade-up" data-aos-duration="1000">Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a href="#" className='hol-btn'>get a quotation <i className="fa-solid fa-right-long"></i></a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='col-qes-mid'>

               <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        This is safe ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Can I get guarantee ?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Where the ofice ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
</div>


              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='col-qes-righ'>

<div className="accordion" id="accordionExample2">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne">
        This is safe ?
      </button>
    </h2>
    <div id="collapseOne2" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
        Can I get guarantee ?
      </button>
    </h2>
    <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
        Where the ofice ?
      </button>
    </h2>
    <div id="collapseThree2" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach */}

      <section className='reach'>
        <div className='container'>
          <div className='row rech'>
            <div className='col-lg-4 col-md-5 col-sm-12'>
              <div className='col-rech'>
                <h4>Get Answered</h4>
                <h2 data-aos="fade-up" data-aos-duration="1000">feel free to reach out to us directly.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                <a href="#" className='hol-btn'>learn more <i className="fa-solid fa-right-long"></i></a>
              </div>
            </div>
            <div className='col-lg-8 col-md-7 col-sm-12'>
              <div className='col-rech-right'>
                <div className='rech-img'>
                  <img src="images/tea-pic.jpg" alt="tea-pic" />
                </div>
                <div className='rech-form' data-aos="fade-right" data-aos-duration="900">
                  <h3>Fill this form to get directly answered</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus..</p>
                  <div className='re-formc'>
                    <ReachForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Generals */}

      <section className='generals'>
        <div className='container'>
          <h4>General QUestion</h4>
          <h2 data-aos="fade-up" data-aos-duration="1000">General Question Based From Our Clients & Customer</h2>
          <div className='safe-wrap'>
            
            <div className='row ques-drop'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='col-qes-mid'>

               <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        This is safe ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Can I get guarantee ?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Where the ofice ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
</div>


              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='col-qes-righ'>

<div className="accordion" id="accordionExample2">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne">
        This is safe ?
      </button>
    </h2>
    <div id="collapseOne2" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
        Can I get guarantee ?
      </button>
    </h2>
    <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
        Where the ofice ?
      </button>
    </h2>
    <div id="collapseThree2" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
      <div className="accordion-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
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

export default Faqs
