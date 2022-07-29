import React from 'react'
import "./CSS/Hero.css"
import profilepic from "../Assets/RoundJonte.png"
const Hero = () => {

  return (
    <div className="Page-wrapper">
      <div className="Hero-container">
        <div className="Hero-content">
          <h1 className="Hero-title">Hello! I am <span>Jonathan Bäcklin</span></h1>
          <h3>Junior Frontend <span>Developer</span></h3>
        </div>
        <div className="Hero">
          <img src={profilepic} className="Hero-image" alt="" />
        </div>
      </div>

    </div >
  )
}

export default Hero