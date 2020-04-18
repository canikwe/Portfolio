import React from 'react'
import Project from '../components/Project'
import ProjectDetails from '../components/ProjectDetails'
import projectList from '../data/projectList'

const ProjectsList = () => {
  return (
    <div id='projects-list'>
      <h1>Projects List</h1>
      <div className="columns is-desktop is-multiline is-gapless">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <ProjectDetails project={projectList[0]} />
    </div>
  )
}

export default ProjectsList