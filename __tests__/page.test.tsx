import { render, screen, within } from '@testing-library/react'
import Home from '@/app/page'
import { bio, links, person, stack } from '@/content/site'
import { JOKE_URL, json, mockFetch } from './helpers'

beforeEach(() => {
  mockFetch({ [JOKE_URL]: () => json({ joke: 'A test joke.' }) })
})

// Render, then wait for the joke fetch to settle so no state update lands after the test.
const renderHome = async () => {
  render(<Home />)
  await screen.findByText('A test joke.')
}

describe('home page', () => {
  it('shows the hero with name, role and profile links', async () => {
    await renderHome()

    expect(screen.getByRole('heading', { level: 1, name: `I'm ${person.name}` })).toBeInTheDocument()
    expect(screen.getByText(`${person.role} at ${person.company}`)).toBeInTheDocument()
    expect(screen.getByText('hello!')).toBeInTheDocument()

    const hero = document.getElementById('top')!
    expect(within(hero).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', links.github)
    expect(within(hero).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', links.linkedin)
  })

  it('shows the profile links only once, in the hero', async () => {
    await renderHome()
    expect(screen.getAllByRole('link', { name: 'GitHub' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'LinkedIn' })).toHaveLength(1)
  })

  it('shows the bio with the name in bold', async () => {
    await renderHome()
    const about = document.getElementById('about')!
    expect(within(about).getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(about).toHaveTextContent(`${bio.before}${bio.name}${bio.after}`)
    expect(within(about).getByText(bio.name).tagName).toBe('STRONG')
    expect(within(about).getByRole('img', { name: person.name })).toHaveAttribute('src', '/images/profile.jpg')
  })

  it('shows every stack group with its items as chips', async () => {
    await renderHome()
    const section = document.getElementById('stack')!
    for (const { group, items } of stack) {
      const card = within(section).getByRole('heading', { name: group }).parentElement!
      const chips = within(card)
        .getAllByRole('listitem')
        .map((li) => li.textContent)
      expect(chips).toEqual(items)
    }
  })

  it('hides Projects and Blog while their flags are off', async () => {
    await renderHome()
    expect(document.getElementById('projects')).toBeNull()
    expect(document.getElementById('blog')).toBeNull()
    const nav = screen.getByRole('navigation', { name: 'Sections' })
    expect(within(nav).queryByRole('link', { name: 'Projects' })).toBeNull()
    expect(within(nav).queryByRole('link', { name: 'Blog' })).toBeNull()
  })

  it('has a nav link for every visible section, each pointing at a real section', async () => {
    await renderHome()
    const nav = screen.getByRole('navigation', { name: 'Sections' })
    const hrefs = within(nav)
      .getAllByRole('link')
      .map((a) => a.getAttribute('href'))
    expect(hrefs).toEqual(['#top', '#about', '#stack', '#contact'])
    for (const href of hrefs) {
      expect(document.getElementById(href!.slice(1))).not.toBeNull()
    }
  })

  it('shows exactly one joke card while Projects and Blog are hidden', async () => {
    await renderHome()
    expect(screen.getAllByRole('complementary', { name: 'Dad joke' })).toHaveLength(1)
  })

  it('shows the current year in the footer', async () => {
    await renderHome()
    expect(screen.getByRole('contentinfo')).toHaveTextContent(`© ${new Date().getFullYear()}`)
  })
})
