import React from 'react'

const Blog = ({blog: {thumbnail, title, pubDate, link}}) => {
  return (
    <div className='column is-3'>
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={ thumbnail } alt="thumbnail" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            {/* <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div> */}
            <div className="media-content">
              <p className={title.length > 40 ? "title is-5" : "title is-4"}>{ title }</p>
              <p className="subtitle is-6">@c.anikwe</p>
              <time dateTime={ pubDate }>11:09 PM - 1 Jan 2016</time>

            </div>
          </div>

          {/*<div className="content">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br /> 
            <time dateTime={blog.pubDate}>11:09 PM - 1 Jan 2016</time>
          </div>*/}
        </div>

        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on <a href={ link }>Medium</a>
            </span>
          </p>
        </footer>

      </div>
    </div>
  )
}

export default Blog