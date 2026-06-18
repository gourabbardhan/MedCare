import React from 'react'

const DirCard = ({image, name, post}) => {
  return (
    <>
    <div className='dir-card'>
      <div className='dirc-img'>
        <div className='dirc-img-up'>
            <img src={image} alt="dir-img" />
        </div>
        <div className='dirc-img-bott'>
            <div className='dir-social-wrap'>
                <a href='#' className='soc-wrap' target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='#' className='soc-wrap' target='_blank'><i className="fa-brands fa-twitter"></i></a>
                <a href='#' className='soc-wrap' target='_blank'><i className="fa-brands fa-pinterest-p"></i></a>
            </div>
        </div>
      </div>
      <div className='dirc-txt'>
        <h3>{name}</h3>
        <h5>{post}</h5>
      </div>
    </div>
      
    </>
  )
}

export default DirCard

