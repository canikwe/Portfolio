import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import Joke from '../components/Joke'

const BlogsList = () => {
  const [blogs, updateBlogs] = useState([])

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@c.anikwe')
      .then((res) => res.json())
      .then((data) => {
        updateBlogs(data.items.filter(b => b.categories.length))
      })
  }, [])

  if (!blogs.length) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <>
      <div id='blogs-header' className='card'>
        <Joke />
      </div>
      <div id='blogs-list'>
        <section className="hero is-fullheight is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className='title'>Blogs</h1>
              <div className="columns is-centered is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
                {
                  blogs.slice(0, 4).map(b => <Blog key={b.pubDate} blog={b} />)
                }
              </div>
              <a href='https://medium.com/@c.anikwe' target='_blank' rel="noopener noreferrer">
                <button className="button is-outlined is-primary is-pulled-right">
                  {/* <span class="icon">
                    <Icon path={mdiChevronDoubleDown}
                      title="Chevron Down to About Section"
                      size='3em'
                      horizontal
                      color="teal"
                    />
                  </span> */}
                  <span>More</span>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogsList