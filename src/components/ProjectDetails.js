import React from 'react'

const ProjectDetails = ({ project, closeDetails}) => {
  if (!project) {
    return (
    <div className={"modal"}></div>
    )
  }
  return (
    <div className={"modal is-active"}>
      <div className="modal-background" onClick={() => closeDetails(null)}></div>
      <div className="modal-content box">
        <div className='tile is-ancestor'>
          <div className="tile is-vertical is-parent">
            <div className='tile'>
              <section className="tile is-child is-6 modal-card-body">
                <p className="image">
                  <img src={project.featureImg} alt='feature' />
                </p>
              </section>
              <section className="tile is-child is-6 modal-card-body">
                <p className="title is-3">{project.title}</p>
                <p>{project.description}</p>
                <p>
                  <a href={project.demo}>Demo</a>
                  <a href={project.frontendRepo}>Frontend Repo</a>
                  <a href={project.backendRepo}>Backend Repo</a>
                </p>
                {project.tags.map(t => (
                  <span key={t} className="tag is-primary is-light">{t}</span>
                  )
                )}                
              </section>
            </div>

            <div className='tile'>
              {project.secondaryImgs.map((img, i) => (
                <section key={i} className="tile is-child is-4 modal-card-body">
                  <p className="image">
                    <img src={img} alt={`${project.title}-${i + 1}`} />
                  </p>
                </section>
                )
              )}
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails