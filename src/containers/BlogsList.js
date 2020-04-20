import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'

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
    <div id='blogs-list'>
      <div className="container">
        <h1 className='title'>Blog List</h1>
        <div className="columns is-desktop is-centered is-multiline">
          {
            blogs.map(b => <Blog key={b.pubDate} blog={b} />)
          }
        </div>
      </div>
    </div>
  )
}

export default BlogsList