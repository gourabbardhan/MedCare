import React from 'react'
import { Link } from 'react-router-dom'

const ArtCard = ({ title, body, image }) => {
  return (
    <>

      <div className='article-card'>
      <div className='artic-img'>
        <div className='articimg-wrap'>
            <img src={image} alt="artimage" />
        </div>
        <a href="#" className='art-head'>MentalHealth</a>
        <div className='art-round'>
            <div className='eightwrap'>
                <span className='eighteen'>18</span><br />Mar
            </div>
        </div>
      </div>
      <div className='learnwrap'>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link to="/singleblog" className='art-btn'>learn more</Link>
      </div>
    </div>
      
    </>
  )
}

export default ArtCard
