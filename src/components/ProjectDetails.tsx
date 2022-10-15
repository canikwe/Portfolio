import React from 'react'
import Carousel from 'nuka-carousel'
import { Project } from '../_types/Project.type'

interface Props {
  project: Project
  closeDetails: (huh: null) => void
}

const ProjectDetails = ({ project, closeDetails }: Props) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => closeDetails(null)}></div>
      <div className="modal-content box is-radiusless is-full-height">
        <div className="image">
          <Carousel>
            {project.secondaryImgs.map((i) => {
              return (
                <img key={i} className="project-img" src={require(`../images/projects/${i}`)} alt={project.title} />
              )
            })}
          </Carousel>
          {/* <img className='project-img' src={require(`../images/projects/${project.secondaryImgs[imgIndex]}`)} alt='feature' onClick={handleImgScroll} /> */}
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-parent">
            <section className="tile is-child modal-card-body has-text-dark">
              <div className="columns">
                <div className="column">
                  <p className="title is-3 has-text-dark">{project.title}</p>
                  <p>
                    {project.tags.map((t) => (
                      <span key={t} className="tag is-primary is-light">
                        {t}
                      </span>
                    ))}
                  </p>
                  <p>
                    <a href={project.demo}>Demo</a>
                    <a href={project.frontendRepo}>Frontend Repo</a>
                    <a href={project.backendRepo}>Backend Repo</a>
                  </p>
                </div>
                <div className="column">
                  <p>
                    <strong>Description: </strong>
                    {project.description}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
