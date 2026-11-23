/**
 * @jest-environment node
 */
import { renderToString } from 'react-dom/server'
import { CurrentYear } from '@/components/CurrentYear'

describe('CurrentYear in the exported HTML', () => {
  it('renders the build year, so server and browser HTML match', () => {
    jest.useFakeTimers({ now: new Date('2031-03-15T12:00:00Z') })
    try {
      expect(renderToString(<CurrentYear buildYear={2026} />)).toBe('2026')
    } finally {
      jest.useRealTimers()
    }
  })
})
