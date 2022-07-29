import React from 'react'
import "./CSS/Hero.css"
import { devInfo } from '../JSON/DevInfo'

const Hero = () => {

  return (
    <div className="Page-wrapper">
      <div className="Hero-container">
        <div className="Hero-content">
          <h1 className="Hero-title">Hello! I am <span>{devInfo.name} {devInfo.surname}</span></h1>
          <h3 className='Hero-subtitle'>{devInfo.grade} {devInfo.specialization}<span> {devInfo.profession}</span></h3>
        </div>
        <div className="Hero">
          <img src={`/images/${devInfo.profilepic}.png`} className="Hero-image" alt="" />
        </div>
      </div>

    </div >
  )
}

export default Hero