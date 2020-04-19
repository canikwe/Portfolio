import React from 'react'

const FeatureBlog = ({blog: {title, link,thumbnail}}) => {
  return (
    <div className='tile is-parent is-7'>
      <div className='tile is-child'>
        <figure className="image is-square">
          <img src={thumbnail} />
        </figure>
        <div className='content'>
          <p className='title is-4'>{title}</p>
        </div>
        <footer className='card-footer'>
          <p className="card-footer-item">
            <span>
              View on <a href={link}>Medium</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default FeatureBlog