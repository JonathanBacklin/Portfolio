import React from 'react'
import "./CSS/Hero.css"
import profilepic from "../Assets/RoundJonte.png"
const Hero = () => {

  return (
    <div className="Page-wrapper">
      <div className="Hero-container">
        <div className="Hero-content">
          <h1 className="Hero-title">Hello, I am Jonathan Bäcklin</h1>
          <h3>Junior Frontend Developer</h3>
        </div>
        <div className="Hero">
          <img src={profilepic} style={{ maxWidth: '600px', height: '600px' }} alt="" />
        </div>
      </div>

    </div >
  )
}

export default Hero