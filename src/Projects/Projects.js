import React from 'react'
import "./CSS/Projects.css"
import ProjectShell from './ProjectShell'
import { ProjectJSONObject } from './ProjectsJSON'
const Projects = () => {

  return (
    <div id='PROJECTS' className='Page-wrapper'>
      <h1 className="Section-title">projects</h1>
      <div className="Grid-container">
        {ProjectJSONObject.map(x =>
          <ProjectShell  {...x} />
        )}
      </div>
      <h1 className="Section-title-end">projects</h1>
    </div>
  )
}

export default Projects