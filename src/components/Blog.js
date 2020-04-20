import React from 'react'
import moment from 'moment'

const Blog = ({blog: {thumbnail, title, pubDate, link, content}}) => {
  
  const convertToText = () => {
    const tag = document.createElement('div')
    tag.innerHTML = content
    return tag.innerText
  }

  return (
    <div className="column is-one-quarter">
      <a href={link}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={ thumbnail } alt="thumbnail" />
            </figure>
          </div>
          <div className="content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5">{ title.slice(0, 40) }...</p>
                <p className="subtitle is-6">
                  <time dateTime={pubDate}>{moment(pubDate).format("MMM Do, YY")}</time>
                </p>
                <p className='content'>
                  {convertToText().slice(0, 85)}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Blog