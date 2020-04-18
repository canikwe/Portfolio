import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'

const BlogsList = () => {
  const [blogs, updateBlogs] = useState([])

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@c.anikwe')
      .then((res) => res.json())
      .then((data) => {
        updateBlogs(data.items.filter(b => b.categories.length))
        console.log(data)
      })
  }, [])

  return (
    <div id='blogs-list'>
      <h1>Blog List</h1>
      <div className='columns is-multiline is-centered is-desktop'>
        {blogs.map(b => <Blog key={b.pubDate} blog={b} />)}
      </div>
    </div>
  )
}

export default BlogsList