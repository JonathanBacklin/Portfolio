import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const ProjectShell = props => {
  useEffect(() => { Aos.init({ duration: 3000 }) }, [])
  return (
    <div className='Grid-item' data-aos="fade-left">
      <h1 className='Grid-title'>{props.name}</h1>
      <h3 className='Grid-smaller-title'>{props.information}</h3>
      <a className='Grid-link' href={props.url} target='_blank' rel='noreferrer'>VISIT URL</a>
    </div>
  )
}

export default ProjectShell