import React, { useState } from 'react'

const Project = ({project, toggleProjectDetails}) => {
  const [hover, updateHover] = useState(' is-hidden')
  
  return (
    <div className='column is-one-quarter' onClick={() => toggleProjectDetails(project)}>
      <div className="card" onMouseOver={() => updateHover(' is-overlay is-centered')} onMouseOut={() => updateHover(' is-hidden')} >
        <div className="card-image">
          <figure className="image is-square">
            <img src={require(`../images/projects/${project.featureImg}`)} alt={project.title} />
          </figure>
        </div>
        <div className={"content" + hover}>
          <p className="title is-4 has-text-dark">{project.title}</p>
          {project.description}
          <br />
        </div>
      </div>
    </div>
  )
}

export default Project