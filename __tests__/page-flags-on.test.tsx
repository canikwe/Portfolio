import { render, screen, within } from '@testing-library/react'
import { FEED_URL, JOKE_URL, json, mockFetch } from './helpers'

// Turn both hidden sections on for this file only.
jest.mock('@/content/site', () => {
  const actual = jest.requireActual('@/content/site')
  return { ...actual, features: { showProjects: true, showBlog: true } }
})

import Home from '@/app/page'

const post = (title: string, categories: string[]) => ({
  title,
  pubDate: '2026-11-01 12:00:00',
  link: `https://medium.com/@c.anikwe/${title.toLowerCase().replace(/\s+/g, '-')}`,
  categories,
  content: '<p>Some <strong>post</strong> body.</p>',
  thumbnail: '',
})

beforeEach(() => {
  mockFetch({
    [JOKE_URL]: () => json({ joke: 'A test joke.' }),
    [FEED_URL]: () =>
      json({
        items: [
          post('Tagged One', ['rails']),
          post('Untagged', []),
          post('Tagged Two', ['react']),
          post('Tagged Three', ['testing']),
          post('Tagged Four', ['ruby']),
          post('Tagged Five', ['aws']),
        ],
      }),
  })
})

// Wait for the feed and all three jokes to load so no state update lands after the test.
const settle = async () => {
  await screen.findByText('Tagged One')
  expect(await screen.findAllByText('A test joke.')).toHaveLength(3)
}

describe('home page with Projects and Blog turned on', () => {
  it('shows both sections and their nav links', async () => {
    render(<Home />)
    expect(document.getElementById('projects')).not.toBeNull()
    expect(document.getElementById('blog')).not.toBeNull()

    const nav = screen.getByRole('navigation', { name: 'Sections' })
    const hrefs = within(nav)
      .getAllByRole('link')
      .map((a) => a.getAttribute('href'))
    expect(hrefs).toEqual(['#top', '#about', '#experience', '#stack', '#projects', '#blog', '#contact'])

    await settle()
  })

  it('adds the typewriter joke before Blog, for three jokes in all', async () => {
    render(<Home />)
    const jokes = screen.getAllByRole('complementary', { name: 'Dad joke' })
    expect(jokes.map((j) => j.className)).toEqual(['joke joke--umbrellas', 'joke joke--typewriter', 'joke joke--payphones'])
    expect(jokes[1].nextElementSibling).toHaveAttribute('id', 'blog')
    await settle()
  })

  it('shows only the newest four tagged posts', async () => {
    render(<Home />)
    await settle()
    const blog = document.getElementById('blog')!

    const titles = within(blog)
      .getAllByRole('heading', { level: 3 })
      .map((h) => h.textContent)
    expect(titles).toEqual(['Tagged One', 'Tagged Two', 'Tagged Three', 'Tagged Four'])
    expect(within(blog).queryByText('Untagged')).toBeNull()
    expect(within(blog).getAllByText('Some post body.')).toHaveLength(4)
  })
})
