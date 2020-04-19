import React, { useState } from 'react'
import Project from '../components/Project'
import ProjectDetails from '../components/ProjectDetails'
import projectList from '../data/projectList'

const ProjectsList = () => {
  const [activeProject, updateActiveProject] = useState(null)

  const toggleProjectDetails = project => {
    updateActiveProject(project)
  }

  return (
    <section id='projects-list' className="hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className='container'>
          <h1 className='title'>Projects List</h1>
          <div className="columns is-desktop is-centered is-multiline is-gapless">
            {projectList.map(p => (
              <Project key={p.id} project={p} toggleProjectDetails={toggleProjectDetails}/>
            ))}

          </div>
          <ProjectDetails project={activeProject} closeDetails={toggleProjectDetails}/>
        </div>
      </div>
    </section>
  )
}

export default ProjectsList