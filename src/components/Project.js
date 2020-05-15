import React from 'react'

const Project = ({project, toggleProjectDetails}) => {
  
  return (
    <div className='column is-one-quarter' onClick={() => toggleProjectDetails(project)}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={require(`../images/projects/${project.featureImg}`)} alt={project.title} />
          </figure>
        </div>
        <div className="content">
          <p className="title is-4 has-text-dark">{project.title}</p>
          {project.description}
          <br />
        </div>
      </div>
    </div>
  )
}

export default Project