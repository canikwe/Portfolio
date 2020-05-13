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
        <section class="hero is-fullheight is-light is-bold">
          <div class="hero-body">
            <div className="container">
              <h1 className='title'>Blogs</h1>
              <div className="columns is-desktop is-centered is-multiline">
                {
                  blogs.map(b => <Blog key={b.pubDate} blog={b} />)
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogsList