import React, { useState } from 'react'
import Joke from '../Jokes/Joke'
import Project from './Project'
import ProjectDetails from './ProjectDetails'
import { projectListData } from './ProjectList.data'
import { Project as ProjectType } from './Project.type'

const ProjectsList = () => {
  const [activeProject, updateActiveProject] = useState<ProjectType | null>(null)

  return (
    <>
      <div id="projects-header" className="card">
        <Joke />
      </div>
      <section id="projects-list" className="hero is-primary is-bold is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Projects</h1>
            <div className="columns is-centered is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
              {projectListData.map((project) => (
                <Project key={project.id} project={project} toggleProjectDetails={updateActiveProject} />
              ))}
            </div>
            {activeProject ? <ProjectDetails project={activeProject} closeDetails={updateActiveProject} /> : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsList
