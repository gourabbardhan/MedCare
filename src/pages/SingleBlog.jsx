import React from 'react'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
  return (
    <>
      
     {/* mini-banner */}

      <section className='mini-banner'>
        <img src="/images/col-img.jpg" alt="blog-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>Single Blog</h3>
            <h1>Setting Healthy Limits for Better Well-Being</h1>
          </div>
        </div>
      </section>

      {/* Well-being */}

      <section className='well-being'>
        <div className='container'>
          <div className='row well-bot'>
            <div className='col-lg-7 col-md-12 col-sm-12'>
              <div className='col-well'>
                <div className='col-well-img'>
                  <img src="/images/tea-pic.jpg" alt="tea-pic" />
                </div>
                <div className='well-social'>
                  <a href="https://www.facebook.com/" target='_blank' className='bot-social' data-aos="fade-right" data-aos-duration="900"><i className="fa-brands fa-facebook-f trt"></i></a>
                  <a href="https://x.com/" target='_blank' className='bot-social' data-aos="fade-right" data-aos-duration="1100"><i className="fa-brands fa-twitter trt"></i></a>
                  <a href="https://in.pinterest.com/" target='_blank' className='bot-social' data-aos="fade-right" data-aos-duration="1300"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <h3>Setting Healthy Limits for Better Well-Being</h3>
                <div className='bot-txt'>
                  <ul>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </li>
                    <li>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </li>
                    <li>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </li>
                    <li>
                      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </li>
                    <li>
                      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </li>
                    <li>
                      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                    </li>
                    <li>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    </li>
                    <li>
                      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    </li>
                    <li>
                      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <div className='col-bot'>
                <h3>Maybe You Like</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.ibus leo.</p>
                <div className='col-bot-wrap'>
                  <div className='poer-bot'>
                    <Link to="/ourblog" className='poer-img'><img src="/images/hol-6.jpg" alt="hol-6" /></Link>
                    <div className='poer-txt'>
                      <h5>March 18, 2024</h5>
                      <Link to="/ourblog" className='poer-anch' data-aos="fade-up" data-aos-duration="1000">Setting Healthy Limits for Better Well-Being</Link>
                    </div>
                  </div>
                  <div className='poer-bot'>
                    <Link to="/ourblog" className='poer-img'><img src="/images/hol-1.jpg" alt="hol-1" /></Link>
                    <div className='poer-txt'>
                      <h5>March 18, 2024</h5>
                      <Link to="/ourblog" className='poer-anch' data-aos="fade-up" data-aos-duration="1100">Signs Symptoms and Treatment Options</Link>
                    </div>
                  </div>
                  <div className='poer-bot'>
                    <Link to="/ourblog" className='poer-img'><img src="/images/banner.jpg" alt="banner" /></Link>
                    <div className='poer-txt'>
                      <h5>March 18, 2024</h5>
                      <Link to="/ourblog" className='poer-anch' data-aos="fade-up" data-aos-duration="1200">Strategies for Coping with Life’s Challenges</Link>
                    </div>
                  </div>
                  <div className='poer-bot'>
                    <Link to="/ourblog" className='poer-img'><img src="/images/hol-5.jpg" alt="hol-5" /></Link>
                    <div className='poer-txt'>
                      <h5>March 18, 2024</h5>
                      <Link to="/ourblog" className='poer-anch' data-aos="fade-up" data-aos-duration="1300">The Power of Self-Compassion</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default SingleBlog
