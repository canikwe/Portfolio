import { render, screen } from '@testing-library/react'
import { CurrentYear } from '@/components/CurrentYear'

describe('CurrentYear in the browser', () => {
  it('updates to the current year when the build is stale', () => {
    jest.useFakeTimers({ now: new Date('2031-03-15T12:00:00Z') })
    try {
      render(
        <p>
          © <CurrentYear buildYear={2026} />
        </p>
      )
      expect(screen.getByText('© 2031')).toBeInTheDocument()
    } finally {
      jest.useRealTimers()
    }
  })
})
