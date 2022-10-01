import React from 'react'
import moment from 'moment'

const Blog = ({ blog: { thumbnail, title, pubDate, link, content } }) => {
  const convertToText = () => {
    const tag = document.createElement('div')
    tag.innerHTML = content
    return tag.innerText
  }

  return (
    <div className="column is-one-quarter">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={thumbnail} alt="thumbnail" className="blog-img" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5">{title.slice(0, 50)}...</p>
                <p className="subtitle is-6">
                  <time dateTime={pubDate}>{moment(pubDate).format('MMM Do, YYYY')}</time>
                </p>
                <p className="content">{convertToText().slice(0, 90)}...</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Blog
