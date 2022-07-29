import React from 'react'
import "./CSS/Projects.css"
import ProjectShell from './ProjectShell'
import { projectsInfo } from '../JSON/DevInfo'

const Projects = () => {

  return (
    <div id='PROJECTS' className='Page-wrapper'>
      <h1 className="Section-title">projects</h1>
      <div className="Grid-container">
        {projectsInfo.map((x, index) =>
          <ProjectShell  {...x} key={index} />
        )}
      </div>
      <h1 className="Section-title-end">projects</h1>
    </div>
  )
}

export default Projects