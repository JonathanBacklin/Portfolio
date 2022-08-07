import React, { useEffect, useState } from 'react'
import './CSS/HeroMobile.css';
import { devInfo } from '../JSON/DevInfo'
import Aos from 'aos'
import "aos/dist/aos.css"
import Scramble from 'react-scramble'
import UseResizeHook from '../Components/UseResizeHook'

const HeroMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  UseResizeHook(setWidth);
  useEffect(() => { Aos.init({ duration: 1000 }) }, []);

  return (
    <div className="Page-wrapper">
      <div className="Hero-container" data-aos="zoom-in">
        <div className="Hero-content" >
          
          <h1 className="Hero-intro">Hello! I am</h1>
          <h1 className='Hero-firstname'><Scramble
            autoStart
            text={devInfo.name}
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

          <h1 className='Hero-surname'><Scramble
            autoStart
            text={devInfo.surname}
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

          <h3 className='Hero-subtitle'>{devInfo.grade} {devInfo.specialization}</h3>
          <h3><Scramble
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
      </div>
    </div>
  )
}

export default HeroMobile