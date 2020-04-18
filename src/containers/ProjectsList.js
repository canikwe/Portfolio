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
    <div id='projects-list'>
      <h1>Projects List</h1>
      <div className="columns is-desktop is-multiline is-gapless">
        <Project project={projectList[0]} toggleProjectDetails={toggleProjectDetails}/>
        <Project project={projectList[0]} toggleProjectDetails={toggleProjectDetails}/>
        <Project project={projectList[0]} toggleProjectDetails={toggleProjectDetails}/>
        <Project project={projectList[0]} toggleProjectDetails={toggleProjectDetails}/>
      </div>
      <ProjectDetails project={activeProject} closeDetails={toggleProjectDetails}/>
    </div>
  )
}

export default ProjectsList