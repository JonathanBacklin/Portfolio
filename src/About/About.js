import React from 'react'
import "./CSS/About.css"
import Timeline from './Timeline'

const About = () => {
  return (
    <div id='ABOUT' className='Page-wrapper'>
      <h1 className="Section-title">about</h1>
      <Timeline />
      <h1 className="Section-title-end">about</h1>
    </div>
  )
}

export default About