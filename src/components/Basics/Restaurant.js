import React from 'react'
import "./style.css";
import Menu from './MenuApi';
const Restaurant = () => {
  return (
    <>
     <div className='card-container'>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>1</span>
          <span className='card-author subtle'>BreakFast</span>
          <h2 className="card-title">Maggi</h2>
          <span className='card-description subtle'>
          Lorem ipsum is a dummy text used to replace text in 
          some areas just for the purpose of an example. 
          It can be used in publishing and graphic design. 
          It is used to demonstrate the graphics elements of a document,
          such as font, typography, and layout.

          </span>
          <div className='card-read'>Read</div>
        </div>
        <img src={image} alt="images" className='card-media' />
        <span className='card-tag subtle'>Order Now</span>
      </div>
    </div>
    </>
  )
}

export default Restaurant
