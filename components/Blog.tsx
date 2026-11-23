'use client'

import { useEffect, useState } from 'react'
import { links } from '@/content/site'
import { ArrowIcon } from './Icons'

type FeedItem = {
  title: string
  pubDate: string
  link: string
  categories: string[]
  content: string
  thumbnail: string
}

const FEED_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@c.anikwe'
const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

const excerpt = (html: string, length: number) => {
  const text = new DOMParser().parseFromString(html, 'text/html').body.textContent ?? ''
  return text.length > length ? `${text.slice(0, length).trimEnd()}…` : text
}

// Hidden until features.showBlog is turned on in content/site.ts.
export const Blog = () => {
  const [posts, setPosts] = useState<FeedItem[] | null>(null)

  useEffect(() => {
    fetch(FEED_URL)
      .then((res) => res.json())
      // Only tagged posts appear on the site, newest four.
      .then(({ items }: { items: FeedItem[] }) => setPosts(items.filter((i) => i.categories.length).slice(0, 4)))
      .catch(() => setPosts([]))
  }, [])

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title section-title--center">Blog</h2>
        <div className="card-grid">
          {posts?.map((p) => (
            <a key={p.link} href={p.link} target="_blank" rel="noopener noreferrer" className="card">
              {p.thumbnail && <img className="card__image" src={p.thumbnail} alt="" />}
              <div className="card__body">
                <time className="muted" dateTime={p.pubDate}>
                  {dateFormat.format(new Date(p.pubDate))}
                </time>
                <h3>{p.title}</h3>
                <p>{excerpt(p.content, 120)}</p>
              </div>
            </a>
          ))}
        </div>
        <a className="blog__more" href={links.medium} target="_blank" rel="noopener noreferrer">
          More on Medium <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
