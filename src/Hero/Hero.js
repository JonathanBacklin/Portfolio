import React, { useEffect } from 'react'
import "./CSS/Hero.css"
import { devInfo } from '../JSON/DevInfo'
import Aos from 'aos'
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => { Aos.init({ duration: 1000 }) }, [])
  return (
    <div className="Page-wrapper">
      <div className="Hero-container" >
        <div className="Hero-content" data-aos="fade-up">
          <h1 className="Hero-title">Hello! I am <span>{devInfo.name} {devInfo.surname}</span></h1>
          <h3 className='Hero-subtitle'>{devInfo.grade} {devInfo.specialization}<span> {devInfo.profession}</span></h3>
        </div>
        <div className="Hero">
          <img src={`/images/${devInfo.profilepic}.png`} className="Hero-image" alt="" data-aos="fade-up" />
        </div>
      </div>
    </div >
  )
}

export default Hero