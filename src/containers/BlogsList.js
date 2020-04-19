import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import FeatureBlog from '../components/FeatureBlog'

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

  if (!blogs.length) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div id='blogs-list'>
      <div className="container">
        <h1>Blog List</h1>
        <div className="tile is-ancestor">
          <FeatureBlog blog={blogs[0]} />
          <div className='tile is-parent is-vertical is-4'>
            {/* <div className='tile is-child'> */}
              {blogs.slice(1, blogs.length).map(b => <Blog key={b.pubDate} blog={b} />)}
            {/* </div> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default BlogsList