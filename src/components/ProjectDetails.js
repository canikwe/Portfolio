import React, { useState } from 'react'

const ProjectDetails = ({ project, closeDetails}) => {

  const [imgIndex, updateImgIndex] = useState(0)

  const handleImgScroll = () => {
    if (imgIndex + 1 > project.secondaryImgs.length - 1) {
      updateImgIndex(0)
    } else {
      updateImgIndex(imgIndex + 1)
    }
  }
  
  if (!project) {
    return (
    <div className={"modal"}></div>
    )
  }
  
  return (
    <div className={"modal is-active"}>
      <div className="modal-background" onClick={() => closeDetails(null)}></div>
      <div className="modal-content box">
        <div className="image">
          <img className='project-img' src={require(`../images/projects/${project.secondaryImgs[imgIndex]}`)} alt='feature' onClick={handleImgScroll} />
        </div>
        <div className="tile is-ancestor">
          <div className='tile is-vertical is-parent'>
            <section className="tile is-child modal-card-body has-text-dark">
              <p className="title is-3 has-text-dark">{project.title}</p>
              <p>
                {project.tags.map(t => (
                  <span key={t} className="tag is-primary is-light">{t}</span>
                )
                )}
              </p>
              <p>{project.description}</p>
              <p>
                <a href={project.demo}>Demo</a>
                <a href={project.frontendRepo}>Frontend Repo</a>
                <a href={project.backendRepo}>Backend Repo</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails