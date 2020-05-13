import React, { useState } from 'react'
import Joke from '../components/Joke'
import Project from '../components/Project'
import ProjectDetails from '../components/ProjectDetails'
import projectList from '../data/projectList'

const ProjectsList = () => {
  const [activeProject, updateActiveProject] = useState(null)

  const toggleProjectDetails = project => {
    updateActiveProject(project)
  }

  return (
    <>
      <div id='projects-header' className='card'>
        <Joke />
      </div>
      <section id='projects-list' className="hero is-primary is-bold is-fullheight">
        <div className="hero-body">
          <div className='container'>
            <h1 className='title'>Projects</h1>
            <div className="columns is-desktop is-centered is-multiline">
              {projectList.map(p => (
                <Project key={p.id} project={p} toggleProjectDetails={toggleProjectDetails}/>
              ))}

            </div>
            <ProjectDetails project={activeProject} closeDetails={toggleProjectDetails}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsList