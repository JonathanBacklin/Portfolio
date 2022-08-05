import React, { useEffect, useState } from 'react'
import "./CSS/Hero.css"
import { devInfo } from '../JSON/DevInfo'
import Aos from 'aos'
import "aos/dist/aos.css"
import Scramble from 'react-scramble'
import UseResizeHook from '../Components/UseResizeHook'

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 960;
  UseResizeHook(setWidth);
  useEffect(() => { Aos.init({ duration: 1000 }) }, [])
  return (
    <div className="Page-wrapper">
      <div className="Hero-container" data-aos="zoom-in">
        <div className="Hero-content" >
          <h1 className="Hero-title">Hello! I am <Scramble
            autoStart
            text={devInfo.name + " " + devInfo.surname}
            className="Hero-title-scramble"
            speed='medium'
            steps={[
              {
                roll: 30,
                action: '+',
                type: 'all',
              },
              {
                action: '-',
                type: 'forward',
              },
            ]}
          /></h1>
          <h3 className='Hero-subtitle'>{devInfo.grade} {devInfo.specialization} <Scramble
            autoStart
            text={devInfo.profession}
            className="Hero-subtitle-scramble"
            speed='medium'
            steps={[
              {
                roll: 30,
                action: '+',
                type: 'all',
              },
              {
                action: '-',
                type: 'forward',
              },
            ]}
          /></h3>
        </div>
        <div className="Hero">
          <img src={`/images/${devInfo.profilepic}.png`} className="Hero-image" alt="" />
        </div>
      </div>
    </div >
  )
}

export default Hero