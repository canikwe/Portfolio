import React from 'react'
import { Project as ProjectType } from '../_types/Project.type'

interface Props {
  project: ProjectType
  toggleProjectDetails: (selectedProject: ProjectType) => void
}

const Project = ({ project, toggleProjectDetails }: Props) => {
  return (
    <div className="column is-one-quarter" onClick={() => toggleProjectDetails(project)}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={require(`../images/projects/${project.featureImg}`)} alt={project.title} />
          </figure>
        </div>
        <div className="content">
          <p className="title is-4 has-text-dark">{project.title}</p>
          {project.tagLine}
          <br />
        </div>
      </div>
    </div>
  )
}

export default Project
