import React from 'react'
import ArticleCard from '../components/blog/ArticleCard'

const OurBlog = () => {
  return (
    <>

    {/* mini-banner */}

      <section className='mini-banner'>
        <img src="/images/col-img.jpg" alt="blog-banner" />
        <div className='container'>
          <div className='about-banner'>
            <h3>Our Blog</h3>
            <h1>Discover Our Blog Content & News Insight</h1>
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

export default OurBlog
