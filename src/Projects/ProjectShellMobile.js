import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const ProjectShellMobile = (props, {key}) => {
  useEffect(() => { Aos.init({ duration: 3000 }) }, [])
  return (
    <div key={key} className='Grid-item' data-aos="zoom-in-up">
      <div className="Grid-item-text">
        <h1 className='Grid-title'>{props.name}</h1>
        <h3 className='Grid-smaller-title'>{props.information}</h3>
      </div>
      <div className="Grid-item-button">
        <a className='Grid-link' href={props.url} target='_blank' rel='noreferrer'> <span>VISIT <br />{props.name}</span></a>
      </div>
    </div>
  )
}

export default ProjectShellMobile