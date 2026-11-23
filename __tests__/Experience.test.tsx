import { render, screen, within } from '@testing-library/react'
import { Experience } from '@/components/Experience'
import { experience, links } from '@/content/site'

describe('Experience', () => {
  it('lists every company in order, most recent first', () => {
    render(<Experience />)
    const companies = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(companies).toEqual([
      'Victory Live (formerly Ticket Evolution)',
      'Zimba Technologies',
      'iC-1 Solutions',
      'Flatiron School',
    ])
  })

  it('shows every role with its exact title, dates and highlights', () => {
    render(<Experience />)
    for (const job of experience) {
      const article = screen.getAllByRole('article').find((a) => a.textContent?.includes(job.company))!
      expect(article).toHaveTextContent(job.context)
      for (const role of job.roles) {
        expect(within(article).getByRole('heading', { level: 4, name: role.title })).toBeInTheDocument()
        expect(within(article).getByText(role.dates)).toBeInTheDocument()
        for (const highlight of role.highlights) {
          expect(within(article).getByText(highlight)).toBeInTheDocument()
        }
      }
    }
  })

  it('shows both Victory Live titles under one company', () => {
    render(<Experience />)
    const victory = screen.getAllByRole('article')[0]
    const titles = within(victory)
      .getAllByRole('heading', { level: 4 })
      .map((h) => h.textContent)
    expect(titles).toEqual(['Staff Software Engineer', 'Senior Software Engineer'])
  })

  it('ends with a link to LinkedIn', () => {
    render(<Experience />)
    expect(screen.getByRole('link', { name: 'More on LinkedIn' })).toHaveAttribute('href', links.linkedin)
  })
})
