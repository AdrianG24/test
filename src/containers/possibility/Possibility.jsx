import React from 'react'
import possibilityImage from '../../assets/community.jpg'
import './possibility.css'


const Possibility = () => {
  return (
    <div className='spinach__possibility section__padding' id='possibility'>
      <div className='spinach__possibility-image'>
        <img src={possibilityImage} alt="possibility"></img>
      </div>
      <div className="spinach__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">A Celebration of Freedom and Adventure</h1>
        <p>Life is a party, and at Spinach, we celebrate the spirit of freedom and adventure. We invite you to join our vibrant community of like-minded slot enthusiasts who crave the thrill of the unknown. Let the years of routine fade away as you immerse yourself in the carefree atmosphere that only a true casino experience can provide. Embrace the liberation that comes with each spin, allowing yourself to order the excitement and thrill you've always desired.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility

