import React from 'react'
import "./CSS/ProjectsMobile.css"
import ProjectShellMobile from './ProjectShellMobile'
import { projectsInfo } from '../JSON/DevInfo'

const ProjectMobile = () => {
  return (
    <div id='PROJECTS' className='Page-wrapper'>
      <h1 className="Section-title">projects</h1>
      <div className="Grid-container">
        {projectsInfo.map((x, index) =>
          <ProjectShellMobile {...x} key={index} />
        )}
      </div>
      <h1 className="Section-title-end">projects</h1>
    </div>
  )
}

export default ProjectMobile