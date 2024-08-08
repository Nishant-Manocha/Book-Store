import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='About-us-wrapper'>
        <div className='About-us-container'>
          <div className='About-us-left'>
            <h1 className='About-us-heading'>About Us</h1>
            <p className='About-us-para'>Dive into our extensive collection of digital books spanning multiple genres and disciplines.e believe that the right book or blog post can ignite curiosity, inspire innovation, and provide the knowledge necessary to excel in various fields.</p>
            <button className='About-us-button'>Learn More</button>
          </div>
        <div className='About-us-right'>
          <img src="../images/AboutUs.jpg" alt="" className='About-us-image'/>
        </div>

        </div>

    </div>
  )
}

export default AboutUs