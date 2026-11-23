import { render, screen, within } from '@testing-library/react'
import { CurrentlyWorkingOn } from '@/components/CurrentlyWorkingOn'
import { currentWork } from '@/content/site'

const card = (title: string) => screen.getByRole('heading', { level: 3, name: title }).closest('article')!

describe('Currently Working On', () => {
  it('shows each item with its status and description', () => {
    render(<CurrentlyWorkingOn />)
    expect(screen.getByRole('heading', { level: 2, name: 'Currently Working On' })).toBeInTheDocument()
    for (const item of currentWork) {
      const article = card(item.title)
      expect(within(article).getByText(item.status)).toBeInTheDocument()
      expect(within(article).getByText(item.description)).toBeInTheDocument()
    }
  })

  it('links myBudee to both public repos', () => {
    render(<CurrentlyWorkingOn />)
    const myBudee = card('myBudee, modernized')
    expect(within(myBudee).getByRole('link', { name: 'Frontend' })).toHaveAttribute(
      'href',
      'https://github.com/canikwe/mynetwork-frontend'
    )
    expect(within(myBudee).getByRole('link', { name: 'Backend' })).toHaveAttribute(
      'href',
      'https://github.com/canikwe/myNetwork-backend'
    )
  })

  it('shows no links for the sprint tracker until its repo is public', () => {
    render(<CurrentlyWorkingOn />)
    expect(within(card('Sprint tracker skill')).queryAllByRole('link')).toHaveLength(0)
  })
})
